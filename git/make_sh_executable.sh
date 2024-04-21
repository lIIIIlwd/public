#!/bin/bash  
  
# 遍历当前目录下的所有.sh文件  
for file in *.sh; do  
    # 检查文件是否存在  
    if [ -f "$file" ]; then  
        # 修改文件权限为可执行  
        chmod +x "$file"  
        echo "已将文件 $file 修改为可执行"  
    else  
        echo "文件 $file 不存在"  
    fi  
done