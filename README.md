# OFA-StationFile-Generating
Automatic generation of material stations for OFA mapart function

# 使用教學
1. 請至release下載最新的檔案(`OFA-SG.exe
`)
2. 首次點開會有config.json建立通知 並將黃色筆跡複製進瀏覽器進行登入
![image]([https://hackmd.io/_uploads/BJxGHSp0T.png](https://cdn.discordapp.com/attachments/975416844628410381/1221447898919862332/upload_73576c569a382b2e4286e87f595df93a.png?ex=66129d00&is=66002800&hm=4c0b51e488fc46dc673871f85e0889c4e194453b33db2f0256fea0fbd60fad99&))

3. 需要將每個要加入座標檢測的盒子下方加上對應材料
具體可以參考`/warp CZKKKK_2`
![2024-03-24_15.57.57]([https://hackmd.io/_uploads/B14HpLp06.png](https://cdn.discordapp.com/attachments/975416844628410381/1221447960177414204/upload_bbdab7e9d674ddddf35a1806db8386a4.png?ex=66129d0f&is=6600280f&hm=bedd091d13ce266c5d88d58798dea4395363d8dd070be4752956ed9a086d6d78&))

3. 將Bot傳送到第一個盒子的對應按鈕上![2024-03-24_14.40.27]([https://hackmd.io/_uploads/rJtliBaAp.png](https://cdn.discordapp.com/attachments/975416844628410381/1221448019946377216/upload_ec4e821b55bd8bc17f033e5126416dc3.png?ex=66129d1d&is=6600281d&hm=2aefd52912257b6a18e59f56b77b8e36873772329b0964098c7aa3eec952cddd&))
 
 4. 要生成檔案的話請使用指令
`/m BOT generating x1 y z1 x2 y z2`
`x1 y z1`是第一個盒子座標
`x2 y z2`是最後一個盒子座標
ex: `/m BOT generating 7920 4 -1103 7920 4 -1111`

***請注意: 前面的座標三個值都需要比後面的大或等於**
![第一個盒子 (1)]([https://hackmd.io/_uploads/BylGYSp0T.png](https://cdn.discordapp.com/attachments/975416844628410381/1221448056495542452/upload_a1397ae3ba0bd0f5b1a768d2f25ed5a5.png?ex=66129d26&is=66002826&hm=bf7f6a83ead7f887896fb2321192a7a451ddcfb3e6cc3b140fc91b6c7f6ce776&))

5. 生成出來的檔案會儲存在Bot目錄下的`materials.json`

![image]([https://hackmd.io/_uploads/SkilTSa0a.png](https://cdn.discordapp.com/attachments/975416844628410381/1221448094693195846/upload_5ff70c7be118e538f69ab0ccfd830b25.png?ex=66129d2f&is=6600282f&hm=2b531fdd88ce3795fc0f78277a699ec2410a777ed7df84aebdc39a37ec35a08b&))
![image]([https://hackmd.io/_uploads/SycrTB6CT.png](https://cdn.discordapp.com/attachments/975416844628410381/1221448145049882654/upload_5686da2334ff67530531aa5c0184965d.png?ex=66129d3b&is=6600283b&hm=6fde80605e6607132f5d41a81ba26a0990bb8fb006b87a00fc5b0a7f2bb9d8d5&))

7. 完成後也別忘記修改warp 分流以及overfull
![image]([https://hackmd.io/_uploads/BJ2QpraCa.png](https://cdn.discordapp.com/attachments/975416844628410381/1221448199303204894/upload_91e5d42b5867ed25bce55c29a18da571.png?ex=66129d48&is=66002848&hm=90fd94b96db62382e244ee31308b1315f8907e4394497d697738f0ab34ee1d39&)https://cdn.discordapp.com/attachments/975416844628410381/1221448199303204894/upload_91e5d42b5867ed25bce55c29a18da571.png?ex=66129d48&is=66002848&hm=90fd94b96db62382e244ee31308b1315f8907e4394497d697738f0ab34ee1d39&)
