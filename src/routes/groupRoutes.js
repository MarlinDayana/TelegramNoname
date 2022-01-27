const Router=require('express');

const router = Router();

const {groupGet, groupPost, groupPut, groupDelete}= require('../controllers/groupController')

router.get('/', groupGet);

router.post('/', groupPost);

router.put('/', groupPut);

router.delete('/', groupDelete);

module.exports = router;