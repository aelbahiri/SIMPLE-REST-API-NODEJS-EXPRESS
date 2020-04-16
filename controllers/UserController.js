const User = require('../models/user');

// Methode: get all user's
exports.getAllUsers = (req, res) => {

    User.findAll()
        .then((users) => {
            // res.render('user/index', { listUsers: users })
            console.log(users);

            res.status(200).json({error: false, data: users})
        })
        .catch(err => res.status(404).json({error: true, message: 'users not found ! '}))

}

// Methode: Store User
exports.storeUser = ( req, res) => {
    let {name, email, password } =  req.body;
    User.create({
        name: name,
        email: email,
        password: password
    })
    .then( 
         // () => res.redirect('./users')
         (users) =>  res.status(201).json({ error:false, data: users}) 
        )
    .catch( (err) => res.status(400).json({ error:true, message: 'Please check the data for user !'}))
}

// Methode: update User
exports.updateUser = ( req, res ) => {
    User.update({
        name: req.body.name,
        email: req.body.email
    },
    {
      where: { id: req.params.id }
    })
    .then( 
        // () => res.redirect('/users')
        (result) => res.status(202).json({ error: false, data: result })
        )
    .catch( (err)=> res.status(400).json({ error:false, message: 'bad request' }))
}

// Methode: show one User
exports.showOneUser = async (req, res) => {
    // res.render('user/show', { user:user })
    
    try{
        let user = await User.findByPk(req.params.id);
        // console.log(user);
            return res.status(200).json({ erro: false, data:user })
    } catch(error) {
        res.status(404).json({ error: true, message: 'user not found !'})
        
    }
    
}

// Methode: delete User
exports.deleteUser = (req, res) => {

    let id = req.params.id ;

    User.destroy({ where: { id:id } })
        .then( 
            // () => res.redirect('/users')
            (user) => res.status(204).status({ })
            )
        .catch( (err) => res.status(404).json({ error: true, message: ' Impossible to delete this resource! '}) )
}

