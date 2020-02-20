<template>

    <div class="container">
        <div id="wrapper">
        <h2 class="med-text"  v-on:click="test">Du nouveau</h2>
        <h3 class="bg-text">chez fatBoar !</h3>
        <ul id="menuPortee" class="nav-tabs column4">
            <li class="active" onclick="showActuByPortee('All', this)"><a>Tous les articles</a></li>
	    </ul>
        <ul id="menuCat" class="nav-tabs column4">
		    <li class="activeCat" v-on:click="showActuByCat('All', this)"><a>Tous les articles</a></li>
	    </ul>
        <div id="contentActu" class="row news-raw">
		
	    </div>
        <ul id="pagin"></ul>
        <div id="numberTeam">
	    </div>
     </div>
</div>
</template>

<style>
#DeltaPlaceHolderPageTitleInTitleArea{
	display: none;
}

#wrapper{
	width: auto;
    margin-left: auto;
    margin-right: auto;
    padding: 0%;
    position: relative;
	font-family: Montserrat,sans-serif;
}

.med-text{
	font-weight: 500;
    font-size: 45px;
    color: #000;
    line-height: 120%;
}

.bg-text{
    line-height: 95%;
    margin-bottom: 20px;
    font-size: 80px;
    font-weight: 700;
    color: #009fe3;
}


.nav-tabs{
	border: 0px;
    margin: 30px 0 0 0;
	list-style: none;
    float: left;
    width: 100%;
}

.nav-tabs li {
    float: left;
    margin-bottom: -1px;
}

.nav-tabs > li {
	margin-bottom: 20px;
	width: 23%;
    margin-right: 0%;
    margin-left: 1.2%;
    position: relative;
    display: block;
}


.nav-tabs>li:hover{
	pointer-events: auto;
}


#menuPortee >li.active{
	pointer-events: none;
}

#menuPortee >li>a:hover, #menuPortee>li.active> a{
	background: #EC6707 !important;
    color: #ffffff !important;
    border: 0;
    box-shadow: none;
	text-decoration:none;
	transition: all .25s ease 0s;
    -webkit-transition: all .25s ease 0s;
    -moz-transition: all .25s ease 0s;
}

#menuPortee>li.liCat>a:hover, #menuPortee>li.liCat.active> a{
	background: #009fe3 !important;
    color: #ffffff !important;
    border: 0;
    box-shadow: none;
	text-decoration:none;
	transition: all .25s ease 0s;
    -webkit-transition: all .25s ease 0s;
    -moz-transition: all .25s ease 0s;
}

#menuCat >li.activeCat{
	pointer-events: none;
}

#menuCat >li>a:hover, #menuCat>li.activeCat> a{
	background: #009fe3 !important;
    color: #ffffff !important;
    border: 0;
    box-shadow: none;
	text-decoration:none;
	transition: all .25s ease 0s;
    -webkit-transition: all .25s ease 0s;
    -moz-transition: all .25s ease 0s;
}

#menuCat>li.liCat>a:hover, #menuCat>li.liCat.activeCat> a{
	background: #009fe3 !important;
    color: #ffffff !important;
    border: 0;
    box-shadow: none;
	text-decoration:none;
	transition: all .25s ease 0s;
    -webkit-transition: all .25s ease 0s;
    -moz-transition: all .25s ease 0s;
}

.nav-tabs>li>a {
	cursor: pointer;
    position: relative;
    display: block;
    padding: 20px 15px;
	color: #848484 !important;
	background: #D4D4D4 !important;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-transform: uppercase;
    margin: 0;
    border-radius: 50px;
    -webkit-border-radius: 50px;
    border: 0;
    box-shadow: none;
}

.news-raw > div {
    margin-top: 2.5%;
    width: 31%;
    float: left;
}

.post-img {
    overflow: hidden;
}

.img-responsive{
	width: 100% !important;
	height: 280px !important;
	object-fit: cover;
}

.post-blck {
	border: 1px solid #BEBEBE;
}

.post-blck:hover .post-img img {
    -moz-transform: scale(1.05);
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
}

.post-img img {
    transition: all .25s ease 0s;
    -webkit-transition: all .25s ease 0s;
    -moz-transition: all .25s ease 0s;
}

.our-news-raw .blog-conn {
    text-align: left;
}

.blog-conn {
	margin-top: -40px;
    background: #fff;
    padding: 20px 0px;
    position: relative;
}

.float {
    float: left;
    width: 100%;
}

.categories-raw {
    background: #009fe3;
    font-size: 11px;
    display: inline-block;
    clear: both;
    color: #fff;
    padding: 2px 5px;
    text-transform: uppercase;
    font-weight: 600;
	margin-left: 20px;
}
.public {
	float: right;
    background: #ec6608;
    font-size: 11px;
    display: inline-block;
    clear: both;
    color: #fff;
    padding: 2px 5px;
    text-transform: uppercase;
    font-weight: 600;
	margin: 0px 20px;
}


.blog-conn a {
    position: relative;
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 600;
}

h6 {
    font-family: Montserrat,sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #000;
    line-height: 120%;
	margin: 0px 20px;
}


.blog-conn h6 {
	height: 50px;
    padding: 10px 0;
}

.blog-conn a h6 {
    text-transform: none;
}

.post-short-content {
	height: 95px;
	margin: 0px 20px;
    font-size: 12px;
    font-weight: 500;
    color: #000;
    line-height: 160%;
}

.readSuite{
	margin: 0px 20px;
}
.orange {
    color: #ec6707 !important;
}

.social {
    text-align: left;
    width: 100%;
	margin-left: 20px;
    float: left;
    padding-top: 15px;
}

.social li {
    width: 20px;
    float: none;
    margin-right: 6px;
    display: inline-block;
    vertical-align: middle;
}

.social img{
	display: block;
    max-width: 100%;
    height: auto;
}

#pagin{
		font-size: 17px;
		text-align: center;
		margin-top: 40px;
	}
	
#pagin li {
	display: inline-block;
}

#pagin li > a {
	margin-right: 10px;
	margin-left: 10px;
}

.pageNumber{
	color: #777 !important;
}

.current {
    color: #009fe3 !important;
}

#numberTeam {
    color: #777;
    text-align: center;
    padding-top: 20px;
}


</style>

<script>

if (process.browser) {
  window.onNuxtReady((app) => {
       var username = "Admin";
            var password = "FKDjshdf876jh6^%shj";
            var proxy = 'https://cors-anywhere.herokuapp.com/';
            var requestUri = "https://www.viapost.fr/api/login_check";

            var varPortee = "All";
            var varCategorie = "All";
            var data;
            jQuery.ajax({
                url: requestUri,
                dataType: "json",
                type: 'post',
                data: {
                    "_username": "Admin",
                    "_password": "FKDjshdf876jh6^%shj"
                },
                success: function(result){	
                    console.log(result.token);
                    jQuery.ajax({
                    type: 'POST',
                        url: 'https://www.viapost.fr/api/post/list/all',
                        dataType: 'json',
                        crossDomain: true,
                        headers: {
                            'Authorization': 'Bearer ' + result.token
                        },
                        success: function (result) {
                        console.log(result);
                        data = result.data;


                        data.sort(custom_sort,data);
                        
                        console.log(data);
                        var tabCat = [];
                    
                        var tabPortee = [];
                        for(var i = 0; i < data.length; i++){
                            if (tabCat.indexOf(data[i].category) === -1){
                                tabCat.push(data[i].category);
                            }
                            
                            if (tabPortee.indexOf(data[i].Scope) === -1){
                                tabPortee.push(data[i].Scope);
                            }
                            
                            showActu(data,i);
                            
                        }
                        pagination(data);
                        
                        for(var j = 0; j < tabCat.length; j++){
                                var li =  document.createElement("li");
                                li.setAttribute("onclick", "showActuByCat('"+ tabCat[j] +"', this)");
                                li.setAttribute("class", "liCat");
                                var a = document.createElement("a");
                                a.appendChild(document.createTextNode(tabCat[j]));
                                li.appendChild(a);
                                jQuery("#menuCat").append(li);
                        }
                        
                        
                        for(var k = 0; k < tabPortee.length; k++){
                                var li =  document.createElement("li");
                                li.setAttribute("onclick", "showActuByPortee('"+ tabPortee[k] +"', this)");
                                var a = document.createElement("a");
                                a.appendChild(document.createTextNode(tabPortee[k]));
                                li.appendChild(a);
                                jQuery("#menuPortee").append(li);
                        }
                },
                error: function (error) {
                        console.log(error);
                }
                });
                },
                error: function (e) {
                    console.log(e);               
                }
            });
	
            function showActu(data,i){
                var col = document.createElement("div");
                col.setAttribute("class", "col-4 paginElement");
                var post = document.createElement("div");
                post.setAttribute("class", "post-blck float reveal");
                col.appendChild(post);
                var postImg = document.createElement("div");
                postImg.setAttribute("class", "post-img float");
                post.appendChild(postImg);
                var aFirst = document.createElement("a");
                aFirst.setAttribute("href", "/Pages/Actualite.aspx?%24id=" + data[i].id);
                //aFirst.setAttribute("target", "_blank");
                postImg.appendChild(aFirst);
                var img = document.createElement("img");
                img.setAttribute("class", "img-responsive");
                img.setAttribute("src", data[i].image);	
                aFirst.appendChild(img);
                var blogcon = document.createElement("div");
                blogcon.setAttribute("class", "blog-conn float");
                var categorie = document.createElement("div");
                categorie.setAttribute("class", "categories-raw");
                categorie.appendChild(document.createTextNode(data[i].category));
                blogcon.appendChild(categorie);
                var catPublic = document.createElement("div");
                catPublic.setAttribute("class", "public");
                catPublic.appendChild(document.createTextNode(data[i].Scope));
                blogcon.appendChild(catPublic);
                var aSecond = document.createElement("a");
                aSecond.setAttribute("href", "/Pages/Actualite.aspx?%24id=" + data[i].id);
                //aSecond.setAttribute("target", "_blank");
                var h6 = document.createElement("h6");
                h6.appendChild(document.createTextNode(truncateString(data[i].title, 40)));
                aSecond.appendChild(h6);
                blogcon.appendChild(aSecond);
                var postShort = document.createElement("div");
                postShort.setAttribute("class", "post-short-content");
                var mycontent = strip_tags(data[i].shortContent);
                postShort.innerHTML = truncateString(mycontent, 145);
                blogcon.appendChild(postShort);
                var aThird = document.createElement("a");
                aThird.setAttribute("href", "/Pages/Actualite.aspx?%24id=" + data[i].id);
                aThird.setAttribute("target", "_blank");
                aThird.setAttribute("class", "readSuite left orange");
                aThird.appendChild(document.createTextNode("Lire la suite"));
                blogcon.appendChild(aThird);
                
                var ulSocial = document.createElement("ul");
                ulSocial.setAttribute("class", "social");
                blogcon.appendChild(ulSocial);
                
                if (data[i].Scope != "Interne"){
                
                    var liLink = document.createElement("li");
                    ulSocial.appendChild(liLink);
                    var aLink = document.createElement("a");
                    aLink.setAttribute("href", "");
                    aLink.setAttribute("target", "_blank");
                    liLink.appendChild(aLink);
                    var imgLink = document.createElement("img");
                    imgLink.setAttribute("class", "rsc-responsive");
                    imgLink.setAttribute("src", "/Style%20Library/Images/logo-linkedin.png");
                    imgLink.setAttribute("alt", "Share on LinkedIn");
                    var openLink = "window.open('http://www.linkedin.com/shareArticle?mini=true&url="+ data[i].url +"','sharer','toolbar=0,status=0,width=548,height=525');";
                    imgLink.setAttribute("onClick", openLink);
                    aLink.appendChild(imgLink);
                    var liTwitter = document.createElement("li");
                    ulSocial.appendChild(liTwitter);
                    var aTwitter = document.createElement("a");
                    aTwitter.setAttribute("href", "");
                    aTwitter.setAttribute("target", "_blank");
                    liTwitter.appendChild(aTwitter);
                    var imgTwitter = document.createElement("img");
                    imgTwitter.setAttribute("class", "rsc-responsive");
                    imgTwitter.setAttribute("src", "/Style%20Library/Images/logo-twitter.png");
                    imgTwitter.setAttribute("alt", "Share on Twitter");
                    var openTwitter = "window.open('https://twitter.com/intent/tweet?url="+ data[i].url +"','sharer','toolbar=0,status=0,width=548,height=525');";
                    imgTwitter.setAttribute("onClick", openTwitter);
                    aTwitter.appendChild(imgTwitter);
                
                }
            
                var liMail = document.createElement("li");
                ulSocial.appendChild(liMail);
                var aMail = document.createElement("a");
                aMail.setAttribute("href", "mailto:?subject=Actualité&body="+ data[i].url +"");
                aMail.setAttribute("target", "_blank");
                liMail.appendChild(aMail);
                var imgMail = document.createElement("img");
                imgMail.setAttribute("class", "rsc-responsive");
                imgMail.setAttribute("src", "/Style%20Library/Images/gmail.png");
                imgMail.setAttribute("alt", "Share on Mail");
                aMail.appendChild(imgMail);
                
                post.appendChild(blogcon);
                

                jQuery("#contentActu").fadeIn();
                jQuery("#contentActu").append(col);
            }
	function showActuByCat(categorie, myElement){
		varCategorie = categorie;
		console.log(categorie);

		var current = document.getElementsByClassName("activeCat");
		current[0].className = current[0].className.replace("activeCat", "");
		jQuery(myElement).addClass("activeCat");
		document.getElementById("contentActu").style.display = "none";
		document.getElementById("contentActu").innerHTML = "";
		if (categorie == "All"){
			for(var i = 0; i < data.length; i++){
				if(varPortee == "All"){
					showActu(data,i);
				}
				else if(data[i].Scope == varPortee){
					showActu(data,i);
				}
			}
			pagination(data);
		}else{
			for(var i = 0; i < data.length; i++){
				if (data[i].category == categorie){
					if (data[i].category == categorie){
						if(varPortee == "All"){
							showActu(data,i);
						}else if (data[i].Scope == varPortee)
						{
							showActu(data,i);
						}
					}
				}
			}
			pagination(data);
		}
	}
	function showActuByPortee(portee, myElement){
		varPortee = portee;
	
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace("active", "");
		jQuery(myElement).addClass("active");
		document.getElementById("contentActu").style.display = "none";
		document.getElementById("contentActu").innerHTML = "";
		if (portee == "All"){
			for(var i = 0; i < data.length; i++){
				if(varCategorie == "All"){
					showActu(data,i);
				}
				else if(data[i].category == varCategorie){
					showActu(data,i);
				}
			}
			pagination(data);
		}else{
			for(var i = 0; i < data.length; i++){
				if (data[i].Scope == portee){
					if (data[i].Scope == portee){
						if(varCategorie == "All"){
							showActu(data,i);
						}else if (data[i].category == varCategorie)
						{
							showActu(data,i);
						}
					}
				}
			}
			pagination(data);
		}
	}
	
            function pagination(data){
            
                document.getElementById("pagin").innerHTML = "";
                
                var pageSize = 6;

                var pageCount =  jQuery(".paginElement").length / pageSize;
                for(var i = 0 ; i <pageCount;i++){
                    jQuery("#pagin").append('<li><a class="pageNumber" href="#">'+(i+1)+'</a></li> ');
                }
                
                document.getElementById("numberTeam").innerHTML = "";
                var numberTeam = document.createElement("p");
                numberTeam.appendChild(document.createTextNode(jQuery(".paginElement").length +" actualités" ));
                jQuery('#numberTeam').append(numberTeam);
                
                
                jQuery("#pagin li").first().find("a").addClass("current")
                showPage = function(page) {
                    jQuery(".paginElement").hide();
                    jQuery(".paginElement").each(function(n) {
                    if (n >= pageSize * (page - 1) && n < pageSize * page)
                        jQuery(this).show();
                    });        
                }

                showPage(1);

                jQuery("#pagin li a").click(function() {
                    jQuery("#pagin li a").removeClass("current");
                    jQuery(this).addClass("current");
                    showPage(parseInt(jQuery(this).text())) 
                });
            }

            function showPage(page) {
                    jQuery(".paginElement").hide();
                    jQuery(".paginElement").each(function(n) {
                    if (n >= pageSize * (page - 1) && n < pageSize * page)
                        jQuery(this).show();
                    });        
                }
            
            function truncateString(str, num) {
            if (str.length <= num) {
                return str
            }
            return str.slice(0, num) + '...'
            }
                      
            
            function custom_sort(a, b) {
                return new Date(a.post_date).getTime() - new Date(b.post_date).getTime();
            }

	
	function strip_tags(html)
{
//PROCESS STRING
if(arguments.length < 3) {
 html=html.replace(/<\/?(?!\!)[^>]*>/gi, '');
} else {
 var allowed = arguments[1];
 var specified = eval("["+arguments[2]+"]" );
 if(allowed){
  var regex='</?(?!(' + specified.join('|') + '))\b[^>]*>';
  html=html.replace(new RegExp(regex, 'gi'), '');
 } else{
  var regex='</?(' + specified.join('|') + ')\b[^>]*>';
  html=html.replace(new RegExp(regex, 'gi'), '');
 }
}
//CHANGE NAME TO CLEAN JUST BECAUSE  
var clean_string = html;
//RETURN THE CLEAN STRING
return clean_string;
}

  })
}
export default {
methods: 
    {
        
    }
}

</script>