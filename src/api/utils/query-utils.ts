export class queryUtils {
    static runQuery(connection, query) {
        return new Promise((resolve, reject) => {
            try {
                connection.query(query, function (err, result) {
                    if (err) throw err;
                    console.log("Table altered");
                    resolve(result);
                });
            } catch (err) {
                reject(err)
            }
        })
    }
}