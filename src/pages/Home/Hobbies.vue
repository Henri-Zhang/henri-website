<template>
  <div class="container">
    <div class="title">My hobbies and interests</div>
    <div class="carousel">
      <button class="slide-arrow prev" @click="previous">
        <Icon name="left-arrow" />
      </button>
      <ul class="items" ref="itemsUl">
        <li v-for="(item, index) in hobbies" :key="item.name" class="item" @click="itemOnClick">
          <img :src="item.img" :alt="item.name" />
          <div class="name">{{ item.name }}</div>
        </li>
      </ul>
      <button class="slide-arrow next" @click="next">
        <Icon name="right-arrow" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Icon from '@/components/Icon';
import hobbies from '@/datas/hobbies';

export default {
  name: 'Hobbies',
  data() {
    return {
      hobbies,
    };
  },
  components: {
    Icon,
  },
  methods: {
    previous() {
      const fisrtChild = this.$refs.itemsUl.children[0];
      this.$refs.itemsUl.appendChild(fisrtChild);
    },
    next() {
      const length = this.hobbies.length;
      const fisrtChild = this.$refs.itemsUl.children[0];
      const lastChild = this.$refs.itemsUl.children[length - 1];
      this.$refs.itemsUl.insertBefore(lastChild, fisrtChild);
    },
    itemOnClick(e) {
      let index;
      this.$refs.itemsUl.childNodes.forEach((item, i) => {
        if (e.target.parentNode === item) {
          index = i;
        }
      });
      const middle = ~~(this.hobbies.length / 2);

      while (index !== middle) {
        if (index > middle) {
          this.previous();
          index--;
        } else {
          this.next();
          index++;
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import '~@/styles/common';

.container {
  padding-top: 4rem;
  padding-bottom: 7rem;

  .title {
    font-family: 'Avenir LT 65 Medium';
    font-size: 2rem;
    color: black;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 4rem;
  }

  .slide-arrow {
    font-size: 2em;
    width: 2em;
    height: 2em;
    border-radius: 0.15em;
    outline: none;
    border: none;
    cursor: pointer;
    text-align: center;
    background-color: white;
    box-shadow: inset 0 0 0 2px @theme-green;
    transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;

    &:hover {
      background-color: @theme-green;

      > svg {
        color: white;
      }
    }

    > svg {
      color: @theme-green;
      line-height: 2em;
      transition: transform 0.2s ease-in-out;
    }
  }

  .prev:hover {
    transform: rotate(-45deg);

    > svg {
      transform: rotate(45deg);
    }
  }

  .next:hover {
    transform: rotate(45deg);

    > svg {
      transform: rotate(-45deg);
    }
  }

  .carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    .items {
      position: relative;
      display: flex;
      height: 300px;
      width: 944px;
      padding: 0;
      margin: 0 3 * @space;

      .item {
        position: absolute;
        box-shadow: 2px 1px 15px black;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        img {
          display: block;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
        }

        .name {
          height: 60px;
          font-size: 1rem;
          text-transform: uppercase;
          line-height: 60px;
          text-align: center;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          font-family: Avenir-Black, sans-serif;
          background-color: @theme-orange;
          color: white;
        }

        &:nth-of-type(1) {
          left: 0;
          z-index: 1;
          box-shadow: none;
        }

        &:nth-of-type(2) {
          left: 0;
          z-index: 2;
          box-shadow: 2px 1px 15px black;
        }

        &:nth-of-type(3) {
          transform: scale(1.1);
          left: 160px;
          z-index: 3;
        }

        &:nth-of-type(4) {
          transform: scale(1.2);
          left: 352px;
          z-index: 4;
        }

        &:nth-of-type(5) {
          transform: scale(1.1);
          left: 544px;
          z-index: 3;
        }

        &:nth-of-type(6) {
          left: 704px;
          z-index: 2;
          box-shadow: 2px 1px 15px black;
        }

        &:nth-of-type(7) {
          left: 704px;
          z-index: 1;
          box-shadow: none;
        }
      }
    }
  }
}
</style>
