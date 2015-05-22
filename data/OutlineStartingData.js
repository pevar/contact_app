/**
 * Created by cbartolini on 19/05/15.
 */
module.exports = {
    init: function () {
        localStorage.clear();
        localStorage.setItem('contacts', JSON.stringify({
                "count": 8,
                "next": null,
                "previous": null,
                "results": [
                    {
                        "id": 1,
                        "firstName": "Claudio"
                    },
                    {
                        "id": 3,
                        "firstName": "Chicco"
                    },
                    {
                        "id": 4,
                        "firstName": "aaaa"
                    },
                    {
                        "id": 5,
                        "firstName": "2"
                    },
                    {
                        "id": 6,
                        "firstName": "ssss"
                    },
                    {
                        "id": 7,
                        "firstName": "paw"
                    },
                    {
                        "id": 8,
                        "firstName": "paw"
                    },
                    {
                        "id": 9,
                        "firstName": "aaaa"
                    }
                ]
            }

        ));

    }
}