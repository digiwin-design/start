<template>
  <div>
    <!-- 聯絡表單 -->
    <div id="contact">
      <div id="contactTxt" class="clearfix">
        <h2>資料索取與諮詢</h2>
        <div id="info">
          <p>
            請填寫下方資料便於盡快為您服務。
            <br />若您需要立即的支援與服務，請直撥免付費專線 <span class="highLight">0800-888-162</span>，謝謝！
          </p>
          <ul>
            <li class="line">
              <a href="https://s.aiii.ai/g/f6602c" target="_blank"></a>
            </li>
            <li class="mail">
              <a href="mailto:marketing01@digiwin.com"></a>
            </li>
            <li class="fb">
              <a href="https://www.facebook.com/DSCmain" target="_blank"></a>
            </li>
          </ul>
        </div>
        <div id="formBlock" class="form">
          <a id="fromSource" href="javascript:;">WB003112</a>
          <!-- 文宣編號 -->
          <div id="contactInput" class="clearfix">
            <span class="hideLabel">*公司名稱：</span>
            <input type="text" placeholder="*完整公司名稱" name="contact-company" id="contact-company" class="contact required" />
            <span class="hideLabel perLabel">*姓名：</span>
            <input type="text" placeholder="*姓名" name="contact_person" id="contact_person" class="contact required" />
            <span class="hideLabel evenLable">*聯絡電話：</span>
            <input type="text" placeholder="*聯絡電話" name="telephone" id="telephone" class="contact required end" />
            <span class="hideLabel evenLable">*E-mail：</span>
            <input type="text" placeholder="*E-mail" name="contact-email" id="contact-email" class="contact required" />
            <span class="hideLabel">*部門：</span>
            <input type="text" placeholder="*部門" name="contact-dept" id="contact-dept" class="contact required" />
            <span class="hideLabel">*職稱：</span>
            <input type="text" placeholder="*職稱" name="contact-job" id="contact-job" class="contact required end" />
          </div>
          <div class="consult-cont">
            <p class="hideLabel">請在這裡描述您的需求：</p>
            <textarea id="contact-query" cols="40" placeholder="請在這裡描述您的需求(500字以內)：" rows="4" class maxlength="500"></textarea>
          </div>
          <div class="inforCheck">
            <label for="dm_ask"> <input name="information" class="information" id="dm_ask" type="checkbox" value="資料索取" />索取塑膠業相關資料 </label>
          </div>
          <hr />
          <div class="verifica">
            <span class="veriSpan">＊請輸入驗證碼：</span>
            <span class="veriSpan-m">驗證碼:</span>
            <input type="text" name id="identCode" class="identCode" onblur="validate()" />
            <input type="button" id="vericodePic" />
            <span class="renovCode" onclick="createCode()"></span>
            <span id="codeSuces"></span>
          </div>
          <input type="button" id="submit" value="送       出" />
          <label for="agree" class="checAgree">
            <input type="checkbox" name="agree" value id="agree" checked />
            我同意接受鼎新電腦
            <a href="https://www.digiwin.com/tw/legal.html" target="_blank">隱私權聲明</a>
          </label>
        </div>
      </div>
    </div>

    <!-- loading -->
    <div id="loading">
      <p><i></i>資料提交中，請稍後</p>
    </div>

    <!-- thx page -->
    <div id="thx">
      <div id="thxContent">
        <div class="close">X</div>
        <p class="title">資料己送出</p>
        <p class="thxparg"></p>
        <p class="suprtCall">
          <span>如需要立即的支援與服務，</span>
          <span>請直撥免付費專線 0800-888-162，謝謝！</span>
        </p>
        <p class="thxSourLoad1">
          <a id="SourLoadLink" href target="_blank">資料下載</a>
        </p>
        <p id="goIndex">
          <a href="javascript:;">繼續瀏覽網站</a>
        </p>
      </div>
    </div>
    <!-- 聯絡表單結束 -->

    <div id="dgwFooter">
      <div class="link01">
        <a href="https://www.digiwin.com/tw/legal.html" target="_blank">隱私權聲明</a>
        <span>│</span>
        <a href="http://career.digiwin.com/" target="_blank">人才招募</a>
        <span>│</span>
        <a href="https://www.facebook.com/DSCmain" target="_blank">粉絲團</a>
        <span>│</span>
        <a href="https://www.digiwin.com/tw/contact/eform.html" target="_blank">聯絡我們</a>
      </div>
      <div class="link02">
        <ul>
          <li>
            <img src="https://www.digiwin.com/tw/dsc/Library/images/digiwinSoft.png" width="77" height="18" align="absmiddle" />
            <span>│</span>
            <span class="text01">
              <a href="https://www.digiwin.com/tw/">鼎新電腦</a> ‧ <a href="http://www.digiwin.com" rel="nofollow" target="_blank">鼎捷軟件</a> ‧
              <a href="http://www.digiwin.com.vn/" rel="nofollow" target="_blank">鼎捷軟件(越南)</a>
              ‧
              <a href="http://www.digiwin.com.vn/en/index.html" target="_blank">鼎捷軟件(馬來西亞)</a>
              ‧ 鼎捷軟件(泰國) ‧ 鼎華系統 ‧
              <a href="https://www.zhilink.com/" target="_new">智互聯</a>
              ‧ 鼎捷移動
            </span>
          </li>
        </ul>
      </div>
      <p>Copyright © 鼎新電腦股份有限公司. Copyright © Data Systems Consulting Co., Ltd. All rights reserved.</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
/*-------------------------------*/
#dgwFooter {
  padding-top: 13px;
  padding-bottom: 17px;
  width: 100%;
  background-color: #d9d9d9;
  color: #595757;
  text-align: center;
  font-size: 13px;
  font-family: '新細明體', '微軟正黑體';
  line-height: 1;
}
#dgwFooter .link01 a {
  display: inline-block;
  padding: 0 3px 0 0x;
  color: #595757;
  text-align: center;
  text-decoration: none;
  font-size: 13px;
}

#dgwFooter .link01 a:hover {
  display: inline-block;
  padding: 0 3px 0 0x;
  color: #595757;
  text-align: center;
  text-decoration: underline;
  font-size: 13px;
}

#dgwFooter .link01 span {
  display: inline-block;
  text-align: center;
  font-size: 9px;
}

#dgwFooter .link02 {
  margin: 14px 0 8px 0;
  text-align: center;
}

#dgwFooter .link02 li {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-align: center;
  -webkit-box-align: center;
  align-items: center;
}

#dgwFooter .link02 ul li a {
  display: inline-block;
  padding: 0 4px 0 1px;
  color: #595757;
  text-align: center;
  text-decoration: none;
  font-size: 13px;
}
#dgwFooter .link02 ul li a:hover {
  display: inline-block;
  padding: 0 4px 0 1px;
  color: #595757;
  text-align: center;
  text-decoration: underline;
  font-size: 13px;
}

#dgwFooter .link02 ul li span {
  display: inline-block;
  text-align: center;
  font-size: 13px;
}

#dgwFooter p {
  clear: both;
  margin: 0;
  font-size: 13px;
}

.clear {
  clear: both;
  margin: 0;
  padding: 0;
  height: 0;
  font-size: 0;
  line-height: 0;
}
@media screen and (max-width: 768px) {
  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  body,
  html {
    -webkit-text-size-adjust: none;
  }
  /*-------------------------------*/
  #dgwFooter {
    padding-top: 13px;
    padding-bottom: 17px;
    width: 100%;
    background-color: #333;
    color: #595757;
    text-align: center;
    font-size: 13px;
    font-family: '微軟正黑體', Arial, Helvetica, sans-serif;
  }
  #dgwFooter .link01 {
    display: none;
  }

  #dgwFooter .link01 a {
    display: none;
    display: inline-block;
    padding: 0 3px 0 0x;
    color: #595757;
    text-align: center;
    text-decoration: none;
    font-size: 13px;
  }

  #dgwFooter .link01 a:hover {
    display: inline-block;
    padding: 0 3px 0 0x;
    color: #595757;
    text-align: center;
    text-decoration: underline;
    font-size: 13px;
  }

  #dgwFooter .link01 span {
    display: inline-block;
    text-align: center;
    font-size: 9px;
  }

  #dgwFooter .link02 {
    display: none;
    margin: 14px 0 8px 0;
    text-align: center;
  }

  #dgwFooter .link02 ul li a {
    display: inline-block;
    padding: 0 4px 0 1px;
    color: #595757;
    text-align: center;
    text-decoration: none;
    font-size: 13px;
  }
  #dgwFooter .link02 ul li a:hover {
    display: inline-block;
    padding: 0 4px 0 1px;
    color: #595757;
    text-align: center;
    text-decoration: underline;
    font-size: 13px;
  }

  #dgwFooter .link02 ul li span {
    display: inline-block;
    text-align: center;
    font-size: 13px;
  }

  #dgwFooter p {
    clear: both;
    margin: 0;
    padding: 0 20px;
    color: #ccc;
    font-size: 13px;
    line-height: 1.8;
  }

  .clear {
    clear: both;
    margin: 0;
    padding: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
  }
}
</style>
