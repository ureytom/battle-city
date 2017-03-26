import { Record } from 'immutable'

const BulletRecord = Record({
  bulletId: 0,
  // 子弹的方向
  direction: null,
  // 子弹的速度
  speed: 0,
  // 子弹的位置
  x: 0,
  y: 0,
  // 子弹的强度. 子弹的强度达到一定数值之后可以摧毁steels
  power: 1,
  // 发射子弹的坦克id
  tankId: -1,
})

export default BulletRecord
