//
//获取榜单列表的方法
//这个方法的输入和输出
//输出对应的榜单列表，因为是异步操作，所以我们可以输出一个Promise对象
import request from '../utils/http'
export function getBillList(type,size=6,offset=0) {
    const url=`/v1/restserver/ting?method=baidu.ting.billboard.billList&size=${size}&type=${type}&offset=${offset}`;
    return request.get(url).then(res=>{
        return{
            ...res,
            list:res.song_list
        }
    })
}

export function getSingerList(tinguid) {
    const url=`/v1/restserver/ting?method=baidu.ting.artist.getInfo&tinguid=${tinguid}`;
    return request.get(url).then(res=>{
        return{
            ...res,
            list:res
        }
    })
}



    export function getSingerLrc(songid) {
        const url=`/v1/restserver/ting?method=baidu.ting.song.play&songid=${songid}`;
        return request.get(url).then(res=>{
            return{
                ...res,
                list:res
            }
        })
    }