const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://mralpha69theboss:123e123e123eX@alpha.xtvhol4.mongodb.net/?retryWrites=true&w=majority",
    {
        useUnifiedtopology: true,
        useNewUrlParser: true,
    }
)
    .then((response) => {
        console.log("Connected to Database");

    })
    .catch((error) => {
        console.log(error);
    });
