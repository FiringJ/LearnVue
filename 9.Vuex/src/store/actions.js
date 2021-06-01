import ACTION from "./alias/actions-type";
import MUTATION from "./alias/mutations-type"

export default {
  [ACTION.UPDATE_INFO](context, payload) {
    // setTimeout(() => {
    //   context.commit(MUTATION.UPDATE_INFO)
    //   console.log(payload.message);
    //   payload.success();
    // }, 1000)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit(MUTATION.UPDATE_INFO)
        resolve('内部数据')
      }, 1000)
    })
  }
}
