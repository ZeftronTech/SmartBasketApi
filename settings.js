var settings = {
    database : {
        postgres : {
            user : 'azizahtas',
            password : 'azizahtas',
            database : 'smartbasket',
            host: 'smart-rack.cyrisb241pul.us-east-1.rds.amazonaws.com',
            port : 5432
        }
    },
    s3 : {
        bucket: "smart-basket",
        url: "https://smart-basket.s3.amazonaws.com/"
    },
    mail : {
         service: 'gmail',
             auth: {
                 user: 'ahtastraders@gmail.com',
                 pass: '09403080450'
             },
            from: 'azizahtas@gmail.com',
            to: [
                'sashi7582@gmail.com',
                'alerts@mysmartshelf.com',
                'azizahtas@gmail.com'
            ]
    }
}


module.exports = settings;
