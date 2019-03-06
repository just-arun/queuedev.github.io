let closeAllSide = ()=>{
    $('.mainpage-wrapper').css({'display':'block','opacity':'1'});
    $('#staicWebpage').css('display','none');
}




let forStaticPage = ()=>{
    $('.mainpage-wrapper').css({
        'opacity':'0',
        'display':'none'
    });
    $('#staicWebpage').css({
        'display':'block',
        'opacity':1
    });
    window.scrollTo(0,0);
    $('#staicWebpage').html(`
    <h3 class="center animated-underline">static webpage</h3>
            <p>
                Our static webpage are not like anyother websitesite but contains aditional features like sending contact mail for busness,
                and paralax effect for awsome looking website all at an resonabel cost, and if the useer prefered then they will get the look and feel of the 
                android app on the website.
            </p>

            <h5>Time Span</h5>
            <p>
                all our static products are made according to our customers requirement and made within 2-3 days
            </p>

            <hr>
            <table>
                <thead>
                    <th>profuct</th>
                    <th>cost</th>
                </thead>
                <tbody>
                    <tr>
                        <td><i class="material-icons"> web</i>Simple Static page</td>
                        <td>Rs.2,500</td>
                    </tr>
                    <tr>
                        <td><i class="material-icons"> web</i>Portfolio</td>
                        <td>Rs.3,500</td>
                    </tr>
                    <tr>
                        <td><i class="material-icons"> add_box</i>Scrolling Effect</td>
                        <td>Rs.1,000</td>
                    </tr>
                    <tr>
                        <td><i class="material-icons"> add_box</i>contact form</td>
                        <td>Rs.500</td>
                    </tr>
                    <tr>
                        <td><i class="material-icons" >web</i>e-commerce Template</td>
                        <td>Rs.5,500</td>
                    </tr>
                </tbody>
            </table
    `);

}

$('.home-link').click((e)=>{
    closeAllSide();
});

$('.staaticpage-details').click(()=>{
    forStaticPage();
});