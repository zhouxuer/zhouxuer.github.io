<template>
  <div class="box">
    <DemoNav/>
      
    <div class="demo-one">
      <div class="content-one">
        <ul class="content-main">
          <li class="main-item-one">
            <div class="part">
              <div class="part-desc">
                <Icon type="md-alarm" size="26" />
                <div class="part-title">语音合成</div>
                <div class="part-info">精准、灵活、可靠</div>
              </div>
              <ul class="list">
                <li>
                  <Icon type="ios-basketball" size="20" />
                  <p>在线语音合成</p>
                </li>
                <li>
                  <Icon type="ios-basketball-outline" size="20" />
                  <p>离线语音合成</p>
                </li>
              </ul>
            </div>
            <div class="detail">
              <ul class="detail-wrap">
                <li>
                  <a href="">
                    <div>
                      <Icon type="ios-basketball-outline" size="20" />
                      在线语音合成
                    </div>
                    <p>体验流畅清晰的云端在线文字转人声服务</p>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div>
                      <div>
                        <Icon type="ios-basketball-outline" size="20" />
                        在线语音合成
                      </div>
                      <p>体验流畅清晰的云端在线文字转人声服务</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="main-item-one">
            <div class="part">111</div>
            <div class="detail">222</div>
          </li>
          <li class="main-item-two">
            <div class="part">
              <div class="name">AIUI</div>
              <div class="more-info">
                <P>一站式人机智能交互解决方案， 人机之间可以通过语音、图像等自然交互方式，进行持续、双向、自然地无障碍沟通。</P>
                <a>查看详情</a>
              </div>
            </div>
          </li>
          <li class="main-item-two">
            <div class="part">
              <div></div>
              <div></div>
            </div>
          </li>
        </ul>
      </div>

      <div class="content-two">
        <ul class="main">
          <li v-bind:class="{active: isActiveOne}" @mouseenter="onMouseeOne">
            <div class="item-content">
              <p class="item-title">投资孵化</p>
              <p class="item-info">讯飞创业孵化平台，提供技术、资本、培训、产业扶持，及更多优质创业资源。</p>
              <ul class="item-more-info">
                <li v-for="(item, index) in (new Array(4))" :key="index">
                  <Icon type="ios-bowtie-outline" size="32" />
                  <div>
                    <p class="item-more-title">技术支持</p>
                    <p class="item-more-desc">高阶服务全面开放，新技术免费试用，技术支持VIP保障</p>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li li v-bind:class="{active: isActiveTwo}" @mouseenter="onMouseeTwo">
            <div class="item-content">
              <p class="item-title">投资孵化</p>
              <p class="item-info">讯飞创业孵化平台，提供技术、资本、培训、产业扶持，及更多优质创业资源。</p>
              <ul class="item-more-info">
                <li v-for="(item, index) in (new Array(4))" :key="index">
                  <Icon type="ios-bowtie-outline" size="32" />
                  <div>
                    <p class="item-more-title">技术支持</p>
                    <p class="item-more-desc">高阶服务全面开放，新技术免费试用，技术支持VIP保障</p>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div class="content-three">
        <div class="teck">
          <i v-bind:class="{active: circle, activeA: circleA, activeB: circleB, activeC: circleC, activeD: circleD}"></i>
        </div>
        <ul class="main-item-content">
          <li @mouseenter="onMouseeOpenOne" @mouseleave="onMouseeGuan">
            <div class="teck-advantage-detail">
              <p class="teck-advantage-title">全球首家人工智能交互平台</p>
              <p class="teck-advantage-desc">作为人工智能云服务的开拓者，我们率先将先进的人工智能核心技术通过互联网云服务对外提供</p>
            </div>
            <Icon type="md-moon" size="50" class="logo"/>
            <i class="icons icons-teck-advantage-line"></i>
          </li>
          <li @mouseenter="onMouseeOpenTwo" @mouseleave="onMouseeGuan">
            <div class="teck-advantage-detail">
              <p class="teck-advantage-title">全球首家人工智能交互平台</p>
              <p class="teck-advantage-desc">作为人工智能云服务的开拓者，我们率先将先进的人工智能核心技术通过互联网云服务对外提供</p>
            </div>
            <Icon type="md-moon" size="50" class="logo"/>
            <i class="icons icons-teck-advantage-line"></i>
          </li>
          <li @mouseenter="onMouseeOpenThree" @mouseleave="onMouseeGuan">
            <div class="teck-advantage-detail">
              <p class="teck-advantage-title">全球首家人工智能交互平台</p>
              <p class="teck-advantage-desc">作为人工智能云服务的开拓者，我们率先将先进的人工智能核心技术通过互联网云服务对外提供</p>
            </div>
            <Icon type="md-moon" size="50" class="logo"/>
            <i class="icons icons-teck-advantage-line"></i>
          </li>
          <li @mouseenter="onMouseeOpenFour" @mouseleave="onMouseeGuan">
            <div class="teck-advantage-detail">
              <p class="teck-advantage-title">全球首家人工智能交互平台</p>
              <p class="teck-advantage-desc">作为人工智能云服务的开拓者，我们率先将先进的人工智能核心技术通过互联网云服务对外提供</p>
            </div>
            <Icon type="md-moon" size="50" class="logo"/>
            <i class="icons icons-teck-advantage-line"></i>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import DemoNav from '~/components/DemoNav.vue'
export default {
  components: {
    DemoNav
  },
  data () {
    return {
      isActiveOne: true,
      isActiveTwo: false,
      circle: true,
      circleA: false,
      circleB: false,
      circleC: false,
      circleD: false
    }
  },
  methods: {
    onMouseeOne () {
      this.isActiveOne = true
      this.isActiveTwo = false
    },
    onMouseeTwo () {
      this.isActiveOne = false
      this.isActiveTwo = true
    },
    onMouseeOpenOne () {
      this.circle = false
      this.circleA = true
      this.circleB = false
      this.circleC = false
      this.circleD = false
    },
    onMouseeOpenTwo () {
      this.circle = false
      this.circleA = false
      this.circleB = true
      this.circleC = false
      this.circleD = false
    },
    onMouseeOpenThree () {
      this.circle = false
      this.circleA = false
      this.circleB = false
      this.circleC = true
      this.circleD = false
    },
    onMouseeOpenFour () {
      this.circle = false
      this.circleA = false
      this.circleB = false
      this.circleC = false
      this.circleD = true
    },
    onMouseeGuan () {
      this.circle = true
      this.circleA = false
      this.circleB = false
      this.circleC = false
      this.circleD = false
    }
  }
}
</script>

<style scoped lang="scss">
.demo-one {
  .content-one {
    margin: 0 5%;
    width: 50%;
    height: 600px;
    border: 2px solid rgb(150, 150, 255);
    .content-main {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      list-style: none;
      padding: 0;
      .main-item-one {
        position: relative;
        overflow: hidden;
        margin: 20px 0 0 0;
        width: 350px;
        height: 250px;
        box-shadow: 0 0 4px #ccc; // 边框阴影
        box-sizing: border-box; // 盒模型
        &:hover {
          .part {
            transform: translateY(-100%);
          }
          .detail {
            transform: translateY(-100%);
          }
        }
        .part {
          padding: 18px 30px;
          height: 100%;
          text-align: center;
          box-sizing: border-box;
          transform: translateY(0%);
          transition: all .5s;
          .part-desc {
            border-top: 4px solid #f4b571;
            i {
              margin: 20px 10px auto;
            }
            .part-title {
              font-size: 22px;
              font-weight: 500;
              text-align: center;
            }
            .part-info {
              margin-top: 10px;
              color: #a7a7a8;
              font-size: 14px;
              text-align: center;
            }
          }
          .list {
            list-style: none;
            display: inline-flex;
            justify-content: center;
            margin-top: 25px;
            color: #666;
            border-top: 1px dashed #ccc;
            li {
              padding: 20px 0 0;
              width: 104px;
              box-sizing: border-box;
              i {
                width: 38px;
                height: 32px;
              }
              p {
                margin-top: 12px;
              }
            }
          }
        }
        .detail {
          height: 100%;
          box-sizing: border-box;
          background: linear-gradient(to right, #2277e6, rgba(34, 119, 230, 0.9));
          transform: translateY(0%);
          transition: all .5s;
          .detail-wrap {
            list-style: none;
            padding: 18px 0 0 16px;
            height: 100%;
            box-sizing: border-box;
            background-position: bottom right;
            background-repeat: no-repeat;
            a {
              display: block;
              padding: 22px 15px;
              color: #fff;
              border-left: 2px solid transparent;
              &:hover {
                border-left: 2px solid #fff;
                background: linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
              }
              i {
                margin-right: 6px;
                vertical-align: middle;
                width: 38px;
                height: 32px;
              }
              p {
                overflow: hidden;
                text-overflow: ellipsis;
                width: 300px;
                white-space: nowrap;
                margin: 8px 0 0 34px;
                color: #bdc9f1;
                font-size: 12px;
              }
            }
          }
        }
      }
      .main-item-two {
        background-image: url(http://file06.16sucai.com/2016/0317/9658897f83c5ac28b9ca7152f4d95186.jpg);
        overflow: hidden;
        background-color: rgb(11, 42, 83);
        margin: 20px 0 0 0;
        width: 350px;
        height: 250px;
        box-shadow: 0 0 4px #ccc; // 边框阴影
        box-sizing: border-box; // 盒模型
        color: #fff;
        text-align: center;
        border-right: 1px solid #ccc;
        transition: all .5s;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 100%;
        &:hover {
          background-size: 110%;
          .part {
            background-color: rgba(2, 129, 255, 0.6);
            .name {
              padding: 50px 0 35px 0;
            }
          }
        }
        .part {
          padding: 0 24px;
          height: 100%;
          .name {
            padding: 125px 0;
            height: 30px;
            font-size: 24px;
            text-align: center;
            transition: all 0.3s;
          }
          .more-info {
            p {
              margin-bottom: 10px;
              height: 96px;
              font-size: 12px;
              line-height: 2;
              text-align: left;
            }
            a {
              width: 136px;
              height: 40px;
              display: inline-block;
              background-color: transparent;
              border-radius: 3px;
              border: 1px solid #fff;
              color: #fff;
              line-height: 40px;
              text-align: center;
              transition: all .2s ease;
              cursor: pointer;
              font-size: 12px;
              &:hover {
                background-color: rgba(255, 255, 255, 0.35);
                border-color: white;
                color: white;
                text-decoration: none;
              }
            }
          }
        }
      }
    }
  }
  .content-two {
    margin: 60px 5%;
    width: 70%;
    height: 500px;
    border: 2px solid rgb(150, 150, 255);
    .main {
      margin: auto;
      max-width: 1200px;
      list-style: none;
      display: flex;
      height: 100%;
      box-sizing: border-box;
      background: url(http://img.zcool.cn/community/038c3bc58d0c7c8a801219c77f27cfa.jpg);
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 100%;
      .active {
        width: 68%;
        .item-content {
          .item-info {
            opacity: 0;
            transition: all .1s;
          }
          .item-more-info {
            display: flex;
            opacity: 1;
            transition: all .5s;
          }
        }
      }
      li {
        overflow: hidden;
        width: 32%;
        background-color: rgba(17, 96, 220, 0.8);
        transition: all .5s;
        &:nth-child(2) {
          background-color: rgba(31, 47, 142, 0.8);
          .item-content {
            &:after {
              right: auto;
              left: -10px;
            }
            .item-title {
              &:after {
                background: #2277e6;
              }
            }
          }
        }
        .item-content {
          position: relative;
          margin: 0 40px;
          height: 412px;
          border-bottom: 1px solid #fff;
          &:after {
            content: '';
            display: block;
            position: absolute;
            bottom: -6px;
            right: -10px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            border: 2px solid #fff;
          }
          .item-title {
            padding: 86px 0 28px 0;
            color: #fff;
            font-size: 28px;
            font-weight: 500;
            text-align: center;
            &:after {
              content: "";
              display: block;
              margin: 10px auto 0;
              width: 44px;
              height: 3px;
              background: #3f4c97;
            }
          }
          .item-info {
            position: absolute;
            left: 50%;
            margin: 24px auto 0 -131px;
            width: 262px;
            color: #fff;
            font-size: 14px;
            line-height: 24px;
            opacity: 1;
            transition: all .5s;
          }
          .item-more-info {
            list-style: none;
            display: flex;
            justify-content: space-between;
            width: 736px;
            text-align: center;
            color: #fff;
            opacity: 0;
            transition: opacity .1s;
            li {
              background-color: rgba(255, 255, 255, 0);
              margin-right: 20px;
              width: 140px;
              .item-more-title {
                margin: 15px 0;
                font-size: 16px;
                text-align: center;
              }
              .item-more-desc {
                color: #ccc;
                text-align: left;
              }
            }
          }
        }
      }
    }
  }
  .content-three {
    margin: 60px 5%;
    width: 75%;
    height: 500px;
    border: 2px solid rgb(150, 150, 255);
    background-color: rgb(20, 27, 59);
    position: relative;
    .teck {
      position: absolute;
      top: 50%;
      transform: translate(0,-50%);
      left: 50%;
      width: 219px;
      height: 219px;
      margin-left: -110px;
      border-radius: 50%;
      background-color: #fff;
      background: url(https://www.xfyun.cn/hera/img/yun-1040622779d12777f44d1785dea90b6e.png) center center no-repeat;
      .active {
        transition: all 1s ease-out;
        animation: rotate 5s linear infinite;
      }
      .activeA {
        transition: all 1s ease-out;
        transform: rotate(5deg);
      }
      .activeB {
        transition: all 1s ease-out;
        transform: rotate(125deg);
      }
      .activeC {
        transition: all 1s ease-out;
        transform: rotate(310deg);
      }
      .activeD {
        transition: all 1s ease-out;
        transform: rotate(180deg);
      }
      i {
        display: block;
        height: 100%;
        width: 100%;
        font-style: normal;
        background: url(data:image/png;base64,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)
                    center center no-repeat;
      }
    }
    .main-item-content {
      margin: 70px 30px 0;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 1180px;
      li:nth-child(n+3) {
        margin-top: 190px;
      }
      li:nth-child(2n+0) {
        margin-left: 300px;
        flex-direction: row-reverse;
      }
      li {
        position: relative;
        display: flex;
        width: 386px;
        &:hover {
          .teck-advantage-detail {
            .teck-advantage-title {
              color: #2277e6;
            }
          }
          .icons-teck-advantage-line {
            &:before {
              top: -3px;
              right: 111px;
              opacity: 1;
            }
          }
        }
        &:nth-child(1) {
          .icons-teck-advantage-line {
            right: -94px;
            bottom: 18px;
            transform: rotateZ(-145deg);
          }
        }
        &:nth-child(2) {
          .icons-teck-advantage-line {
            left: -93px;
            bottom: 18px;
            transform: rotateZ(-35deg);
          }
        }
        &:nth-child(3) {
          .icons-teck-advantage-line {
            right: -94px;
            top: -26px;
            transform: rotateZ(145deg);
          }
        }
        &:nth-child(4) {
          .icons-teck-advantage-line {
            left: -93px;
            top: -26px;
            transform: rotateZ(35deg);
          }
        }
        .teck-advantage-detail {
          width: 294px;
          .teck-advantage-title {
            color: #fff;
            font-size: 20px;
            font-weight: 500;
            text-align: right;
            transition: color 0.3s;
          }
          .teck-advantage-desc {
            margin-top: 28px;
            color: #a2a5b6;
            font-size: 14px;
            line-height: 24px;
          }
        }
        .logo {
          margin: 0 20px;
          color:white;
        }
        .icons-teck-advantage-line {
          position: absolute;
          width: 110px;
          height: 1px;
          background: linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0));
          &:before {
            content: "";
            position: absolute;
            top: -3px;
            right: 0;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            box-shadow: 0 0 15px rgba(47, 204, 255, 0.5);
            background: radial-gradient(rgba(47, 204, 255, 0.7), rgba(47, 204, 255, 0.2));
            opacity: 0;
            transition: all .3s;
          }
          &:after {
            content: "";
            position: absolute;
            top: -3px;
            left: -9px;
            width: 6px;
            height: 6px;
            border: 1px solid rgba(255, 255, 255, 0.7);
            border-radius: 50%;
          }
        }
      }
    }
  }
}
</style>
