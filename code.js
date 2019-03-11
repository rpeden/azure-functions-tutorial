const https = require("https");
const apiVersion = 1.0;
const mapsKey = "your maps key goes here";

const request = (url) => {
    return new Promise((resolve, reject) => {     
        https.get(url, (resp) => {
            let data = "";
            resp.on("data", (chunk) => {
                data += chunk;
            });

            resp.on("end", () => {
                const res = JSON.parse(data)
                resolve(res);
            });
        }).on("error", (err) => {
            reject(err);
        });
    });
}

module.exports = async function (context, req) {
    if (req.query.address) {
        const url = `https://atlas.microsoft.com/search/fuzzy/json?api-version=${apiVersion}&subscription-key=${mapsKey}&query=${req.query.address}`
        context.log(url);
        try {
            const data = await request(url);
            
            context.res = {
                status: 200,
                body: data.results
            };
        } catch(err) {
            context.res = {
                status: 500, 
                body: err
            }
        }
        context.done();
    } else if (req.query.memberId) {
        const url = `https://cdprj-sc.azurewebsites.net/api/GetCode?memberId=${req.query.memberId}`;

        const data = await request(url);
        if (data) {
            context.res = {
                body: data.result
            };
            context.done();
        }       
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass an address as part of the query string."
        };
    }
};