<script setup></script>
<template>
  <footer>
    <ul class="container row jc-sb item-center footer-content">
      <li>
        <h3 class="logo">K-ACADEMY</h3>
        <p class="paragraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint odit ex ducimus? Optio quam
          voluptatibus maiores mollitia quas doloribus, quaerat consectetur, nobis cupiditate totam
          reprehenderit quibusdam ex nulla repellendus laudantium.
        </p>
      </li>
      <li>
        <ul class="contact-info">
          <li>
            <span>Phone Number</span>
            <p>+99999999999</p>
          </li>
          <li>
            <span>Email</span>
            <p>X.X@X.X</p>
          </li>
          <li>
            <span>Address</span>
            <p>London Avenue in the universal world</p>
          </li>
        </ul>
      </li>
      <li>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3071.2058740757784!2d66.97139727601979!3d39.66758327156993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQwJzAzLjMiTiA2NsKwNTgnMjYuMyJF!5e0!3m2!1sen!2s!4v1770786461156!5m2!1sen!2s"
          height="320"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </li>
    </ul>
  </footer>
</template>
<style scoped>
footer {
  background: #f9f1fe;
  padding: 3rem 0;
  margin-top: 2rem;
  
}
 .footer-content > li {
  width: 30%;
}
.footer-content > li:nth-child(2){
    width: 20%;
} 
.footer-content > li:last-child{
    width: 40%;
} 
iframe {
  width: 100%;
}
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
}
.contact-info li{
    display: flex;
    flex-direction: column; 
    gap: .6rem;
}
.contact-info li span{
    font-weight: 600;
}
.contact-info li p{
    font-weight: 400;
    font-size: .9rem;
}
</style>
