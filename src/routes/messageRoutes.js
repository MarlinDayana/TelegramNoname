const Router=require('express');

const router = Router();

const {messageGet, messagePost, messagePut, messageDelete}= require('../controllers/messageController')

router.get('/', messageGet);

router.post('/', messagePost);

router.put('/', messagePut);

router.delete('/', messageDelete);

module.exports = router;