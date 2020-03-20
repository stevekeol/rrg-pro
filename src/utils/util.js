import copy from "copy-to-clipboard";
import { Toast } from "antd-mobile";

//复制指定内容到剪贴板
export const copyToClickBoard = (content, type) => {
  if(copy(content)) {
    Toast.success(`${type}已复制到粘贴板`);
  } else {
    Toast.fail("复制失败");
  }  
}