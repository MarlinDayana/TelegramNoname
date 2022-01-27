const {Router} = require('express')
const {getUser, postUser, putUser, deleteUser, getOneUser}=require('../controllers/userController')

const router = Router();

router.get('/', getUser);

router.get('/:id', getOneUser);

router.post('/', postUser);

router.put('/:id', putUser);

router.delete('/:id', deleteUser);


module.exports = router;