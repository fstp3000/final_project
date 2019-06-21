# Agricultural Blockchain: A Reconceptualized Approach to Organic
### Developers & Contributors
楊昌儒, 張詠盛, Seth Austin Harding, 張凱捷, 江祿檠 , 蔡存哲, 張碩文, 王品閎, 廖品崴, 張耀中
### Abstract
The current inspection process for organic verification is opaque and cumbersome, and is based on inconsistent standards from random samples; to simplify this process, we propose a new course of action using blockchain.

### Blockchain Application
Insect populations, of which are essential to maintaining ecosystem balance, are being decimated by pesticides all throughout the world. The first think that might come to your mind is: What role might blockchain play in combating this phenomenon? Good question!<br>

Proving the organic status of agri-cultural products has been and re-mains one of the most difficult pro-cesses in the agricultural industry.<br>

First of all, what is organic defined as? According to the Taiwan government:<br>
Existing methods require verification by numerous agencies.<br>
On January 29, 2007, the Agricultural Product Production and Verification Management Law was passed, and the definition of organic agricultural products in the domestic production, processing and packaging process should be consistent with the “organic norms” set by the relevant authority and verified by law, or import agricultural products that have passed the examination.<br>
什麼叫”有機“呢? [1] 根據農委會的定義：「有機農業是遵守自然資源循環永續利用原則，不允許使用合成化學物質，強調水土資源保育與生態平衡之管理系統，並達到生產自然安全農產品目標之農業。」2 007年1月，農委會開始實施「農產品生產及驗證管理法」，「有機農業」及其產品即納入政府的法律規範。相關規範請參考本網站「驗證與機構」中的「有機農業驗證規範及法規」。<br>

How are we to prove when insecticides are used? The easiest indicator of this is how many insects are on crops. According to [2] paper 6.5, we can know there are specific kinds of pests prevailing in the organic date palm plantation, since we can track  the insects on the crops, identify and quantify the count of each specific insect, expressing it to a formula.<br>

### Our Blockchain Design
The current inspection process is opaque and cumbersome, and is based on inconsistent standards from random samples.
We need a secure, intuitive, and mutually verified means by which three parties may communicate: government, buyer, and seller.<br>
The API we implement in this project is DeepQ, an API developed by Google which has a backend of Ethereum. Ethereum is the second most popular blockchain under Bitcoin; its nodes proof of stake mechanism allow for storage of highly secure data, all while eliminating the need for a private chain (which would be both more expensive, potentially less secure, and generally more difficult to manage and upkeep). Ethereum's potent smart contract capabilities allow for it to differentiate itself from Bitcoin. Smart contracts are a mechanism by which all parties in a blockchain, including buyers, sellers, and prospective nodes may be completely ensured of fair transaction management without any mutual trust between these parties whatsoever. Meanwhile, to further verify the efficacy of our design, we are in the process of developing a smart contract; it is currently in prototype form. [We will place it on Ropsten testnet and the results will be published likely by the end of this weekend].<br>

### Machine Prototype
Our current machine prototype has a camera mounted to the top of a metal, environment-resistant box. The intent of the design is to constantly survey crops inside of this box. The growth of the crop will not be inhibited by this structure as light and rain still easily may flow to the surveyed crop. The current prototype is fairly small and would not be suitable for surveying larger crops such as wheat. In future designs, we have considered having stochastic location surveying from a drone with a mounted camera; agricultural locations may be mapped onto a separate drone system. Technologies such as this already exist and are provided by DJI. All we need is for the drone to transmit the data to the blockchain. The drone may change locations periodically after gathering sufficient data, and the data transmission would be, in essence, uninterruptible.

Because blockchain is an unalterable data structure, it is naturally effective for sensitive data verification. Current technologies easily support verification of images, and are also being developed for hashing of video content.
There is now a trend in the world of fake news to generate what is called 'deepfakes', which is essentially deep learning's way of putting words never spoken into the mouths of its subjects, both in video and corresponding audio[3]. To combat this, blockchain is being used to verify video content.
I propose that our livestreamed video content may, using the same technology, be used to <br>

--------

### Roles
#### Government
Responsible government agencies of which are taking on the responsibility of manual inspection may now reap the benefit of our design.
#### Buyer
Anyone seeking to certify the organic status of their food may be a potential buyer. Such parties may include restaurants, grocery stores, and other redistributors.
#### Seller
The seller in this case is, of course, the farmer. Besides for providing the government with compulsory crop data, they may also choose to allow others access to this information, which creates another incentive for sellers to produce genuinely organic crops.

### Acknowledgements
There are several weak points to our solution that we have taken note of, thanks to feedback from HTC and others who have helped us to review. For example, if an insect does not move, it will be very difficult or impossible to use DeepQ's API to assess whether a specific entity in the frame is an insect. Right now, our solution would only work for moving insects. Another thing is that, we need to verify a proven correlation between the number of insects on a crop and the usage of pesticides. More insects almost inevitably mean less insecticides and in turn, higher organic index. However, plants also have their own built in insecticide mechanisms. Factors such as these as well as season, time of day, type of crop, and many more would need to be assessed. That is to say that this product is still very much a prototype.<br>
Blockchain can't do everything. One of the difficulties of implement blockchain in this project is the data does not have a mechanism by which to protect from being modified before being parsed by the chain, which is to say that we would be verifying fake data.
There are some solutions that may solve this problem. To make the private key generated in the chip sign all the transactions in the device would be a start. Another solution to this problem is with using the proposed drone design. The drone is not owned by the farmer, but by responsible governmental agencies.

The winning point in our solution is in the simplicity of our design. The open source code can be checked by anyone. It’s just a few hundred lines of code to simplify the current inspection process.

#### Reference Material
[1]. [有機農業全球資訊網](http://info.organic.org.tw/3669/)<br>
[2]. *Insect Pest Management in Organic Farming System, Hamadttu Abdel Farag El-Shafie, Submitted: September 20th 2018, Reviewed: January 17th 2019, Published: March 15th*<br>
[3]. [Deepfake & Blockchain](https://www.wired.com/story/the-blockchain-solution-to-our-deepfake-problems/) [3]
