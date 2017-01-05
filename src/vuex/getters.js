
// 有时候我们需要从 store 中的 state 中派生出一些状态，例如对列表进行过滤并计数
export const list = state => { return state.list.filter(v => v > 10)}