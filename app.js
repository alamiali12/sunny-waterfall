const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

const indexRouter = require('./routes/index');
const adminRouter = require('./routes/admin');
const searchRouter = require('./routes/search');
const categoryRouter = require('./routes/category');

app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/search', searchRouter);
app.use('/category', categoryRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
