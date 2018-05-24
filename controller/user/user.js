'use strict';

import UserModel from '../../models/user/user';
import crypto from 'crypto';
import formidable from 'formidable';
import dtime from 'time-formater';
import {
    error
} from 'util';
class User {
    constructor() {
        this.getUserList = this.getUserList.bind(this);
    }
    // 获取用户列表信息
    async getUserList(req, res, next) {
        const userList = await UserModel.find({
            "id": {
                "$gt": Number(req.query.time) * 10
            }
        }, null, {
            limit: 10
        });
        if (!userList) {
            res.send({
                code: 0,
                data: []
            })
        } else {
            res.send({
                code: 1,
                data: userList
            })
        }
    }
    // 修改用户信息
    async updateUserInfo(req, res, next) {
        // console.log(typeof req.body.id);
        const _res = await UserModel.update({
            id: Number(req.body.id)
        }, {
            $set: req.body
        }, (err, result) => {
            if (err) {
                console.log(err);
                res.send({
                    code: 0,
                    data: "修改失败"
                })
            } else {
                console.log("update");
                res.send({
                    code: 1,
                    data: "修改成功"
                })
            }
        })
    }
    // 获取用户详情信息接口
    async getUserDetailInfo(req, res, next) {
        const user = await UserModel.findOne({
            id: req.query.id
        }, (error, doc) => {
            if (error) {
                console.log(error);
            } else {
                console.log(doc);
            }
        });
        res.send({
            code: 1,
            data: user
        })
    }
    async addUser(req, res, next) {
        if (typeof req.body) {
            await UserModel.create(req.body, (error, doc) => {
                if (error) {
                    console.log(error);
                } else {
                    // console.log(doc);
                    res.send({
                        code: 1,
                        data: "添加成功"
                    })
                }
            })
        }

    }
}
export default new User();