# OFA-StationFile-Generating
Automatic generation of material stations for OFA mapart function

# 使用教學
1. 請至release下載最新的檔案(`OFA-SG.exe
`)
2. 首次點開會有config.json建立通知 並將黃色筆跡複製進瀏覽器進行登入
![image](https://hackmd.io/_uploads/BJxGHSp0T.png)

3. 需要將每個要加入座標檢測的盒子下方加上對應材料
具體可以參考`/warp CZKKKK_2`
![2024-03-24_15.57.57](https://hackmd.io/_uploads/B14HpLp06.png)

3. 將Bot傳送到第一個盒子的對應按鈕上![2024-03-24_14.40.27](https://hackmd.io/_uploads/rJtliBaAp.png)
 
 4. 要生成檔案的話請使用指令
`/m BOT generating x1 y z1 x2 y z2`
`x1 y z1`是第一個盒子座標
`x2 y z2`是第二個盒子座標
ex: `/m BOT generating 7920 4 -1103 7920 4 -1111`

***請注意: 前面的座標三個值都需要比後面的大或等於**
![第一個盒子 (1)](https://hackmd.io/_uploads/BylGYSp0T.png)

5. 生成出來的檔案會儲存在Bot目錄下的`materials.json`

![image](https://hackmd.io/_uploads/SkilTSa0a.png)
![image](https://hackmd.io/_uploads/SycrTB6CT.png)

7. 完成後也別忘記修改warp 分流以及overfull
![image](https://hackmd.io/_uploads/BJ2QpraCa.png)
