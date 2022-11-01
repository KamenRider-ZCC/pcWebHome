<template>
  <div>
    <div class="header">
      {{ `${title}(${num})` }}
      <img
        :class="{ 'hide-tree': !showTree }"
        src="@/assets/bigScreen/arrowUp.png"
        @click="toggleTree"
      />
    </div>
    <div v-if="showTree" class="tree-box">
      <el-input
        placeholder="请输入企业名称"
        suffix-icon="el-icon-search"
        v-model="enterpriseName"
      >
      </el-input>
      <el-scrollbar>
        <el-tree
          ref="tree"
          :data="treeData"
          :props="defaultProps"
          default-expand-all
          :filter-node-method="filterNode"
          highlight-current
          @node-click="handleNodeClick"
        >
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <img
              v-if="data.children"
              class="parent-node"
              :src="parentNodeSrc"
            />
            <div :title="node.label">{{ node.label }}</div>
            <img
              v-if="!data.children"
              class="child-node"
              :src="
                node.isCurrent
                  ? require('@/assets/bigScreen/checkNode.png')
                  : require('@/assets/bigScreen/childNode.png')
              "
            />
          </span>
        </el-tree>
      </el-scrollbar>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    num: {
      type: Number,
      default: 0,
    },
    treeData: {
      type: Array,
      default: () => [],
    },
    parentNodeSrc: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      showTree: true,
      enterpriseName: "",
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  watch: {
    enterpriseName(val) {
      this.$refs.tree.filter(val);
    },
  },
  methods: {
    toggleTree() {
      this.showTree = !this.showTree;
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    handleNodeClick(data) {
      this.$emit("treeClick", data);
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  width: 235px;
  height: 34px;
  background: rgba(23, 64, 125, 0.5);
  border-radius: 4px;
  border: 1px solid #315c86;
  backdrop-filter: blur(3px);
  padding: 0 10px;
  font-size: 14px;
  font-weight: 400;
  color: #d2e9ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  img {
    width: 12px;
    height: 12px;
    cursor: pointer;
    &.hide-tree {
      transform: rotate(180deg);
    }
  }
}
::v-deep .tree-box {
  padding: 15px 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 235px;
  height: 304px;
  background: rgba(23, 64, 125, 0.5);
  border-radius: 4px;
  border: 1px solid #315c86;
  backdrop-filter: blur(3px);
  .el-input .el-input__inner {
    width: 215px;
    height: 30px;
    background: rgba(182, 198, 221, 0);
    border-radius: 2px;
    border: 1px solid #315c86;
    color: #34ccff;
    font-size: 14px;
    font-weight: 400;
  }
  .el-scrollbar {
    margin-top: 19px;
    flex: 1;
    .el-scrollbar__bar.is-vertical .el-scrollbar__thumb {
      width: 5px;
      background: #2db2e4;
      border-radius: 3px;
    }
    .el-scrollbar__bar.is-horizontal .el-scrollbar__thumb {
      height: 5px;
      background: #2db2e4;
      border-radius: 3px;
    }
    .el-tree {
      display: inline-block;
      background-color: transparent;
      color: #d2e9ff;
      .el-tree-node__content {
        &:hover {
          background-color: rgba(45, 178, 228, 0.4);
        }
        .custom-tree-node {
          display: flex;
          align-items: center;
          .parent-node {
            width: 13px;
            height: 13px;
            margin-right: 9px;
          }
          .child-node {
            margin-left: 10px;
            width: 10px;
            height: 14px;
          }
        }
      }
      .el-tree-node.is-current > .el-tree-node__content {
        background-color: transparent;
        color: rgba(255, 185, 79, 1);
      }
    }
  }
}
</style>
