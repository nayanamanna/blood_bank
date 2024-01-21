const express = require("express")
const app = express();
const path = require("path");
const session = require("express-session")
const { Admin } = require("./routes/admin.routes");
const { register, register_post, login, login_post } = require("./controller/auth.controller");
const { user_info } = require("./controller/test.controller");

const port = 3000;

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "view"))
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


//used session
app.use(
    session({
        secret: "BLOOD_BANK",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 36000000    //tme 1000h
        }
    })
)


//set session global var
app.use((req, res, next) => {
    res.locals.user = req.session.user ? req.session.user : null
    next();

})


app.use("/admin", Admin)
app.get('/register', register)
app.get('/login', login)
app.post('/login', login_post)
app.get('/user_info', user_info)

app.post('/register', register_post)



app.listen(port, (error) => {
    if (error) throw new Error(error)
    else console.log(`${port} app is running`)
})
