document.addEventListener("DOMContentLoaded", () => {
    
    let currentLang = 'tr';

    const translations = {
        tr: {
            search_placeholder: "Kahve, içerik veya kategori ara...",
            greeting_morning: "Günaydın! Güne taze bir kahveyle başlamaya ne dersin?",
            greeting_afternoon: "Öğleden sonra enerjini tazelemek için buradayız.",
            greeting_evening: "Günün yorgunluğunu atmak için doğru yerdesiniz...",
            greeting_night: "Gece kahvesi başkadır...",
            not_found: "Aradığınız lezzeti bulamadık.",
            cal_text: "Kalori"
        },
        en: {
            search_placeholder: "Search for coffee, ingredients or category...",
            greeting_morning: "Good morning! Ready for a fresh coffee?",
            greeting_afternoon: "We are here to boost your afternoon energy.",
            greeting_evening: "The perfect place to unwind...",
            greeting_night: "Night coffee hits differently...",
            not_found: "We couldn't find what you are looking for.",
            cal_text: "Calories"
        }
    };

    const menuData = [
        { kategori: "Sıcak Kahveler", kategoriEn: "Hot Coffees", ad: "Espresso", adEn: "Espresso", fiyat: 150, icerik: "Tek shot yoğun İtalyan espressosu.", icerikEn: "Single shot intense Italian espresso.", kalori: "5 kcal", resim: "espresso.jpeg" },
        { kategori: "Sıcak Kahveler", kategoriEn: "Hot Coffees", ad: "Americano", adEn: "Americano", fiyat: 190, icerik: "Espresso üzerine sıcak su ilavesiyle hazırlanmış sert kahve.", icerikEn: "Strong coffee prepared by adding hot water over espresso.", kalori: "15 kcal", resim: "americano.jpeg" },
        { kategori: "Sıcak Kahveler", kategoriEn: "Hot Coffees", ad: "Cappuccino", adEn: "Cappuccino", fiyat: 220, icerik: "Espresso, sıcak süt ve yoğun süt köpüğü.", icerikEn: "Espresso, hot milk, and rich milk foam.", kalori: "110 kcal", resim: "cappuccino.jpeg" },
        { kategori: "Sıcak Kahveler", kategoriEn: "Hot Coffees", ad: "Filtre Kahve", adEn: "Filter Coffee", fiyat: 170, icerik: "Taze demlenmiş yöresel filtre kahve.", icerikEn: "Freshly brewed regional filter coffee.", kalori: "5 kcal", resim: "filtre_kahve.jpeg" },
        { kategori: "Sıcak Kahveler", kategoriEn: "Hot Coffees", ad: "Cortado", adEn: "Cortado", fiyat: 200, icerik: "Eşit oranda espresso ve sıcak süt.", icerikEn: "Equal parts espresso and hot milk.", kalori: "60 kcal", resim: "cortado.jpeg" },
        { kategori: "Sıcak Kahveler", kategoriEn: "Hot Coffees", ad: "Flat White", adEn: "Flat White", fiyat: 200, icerik: "Çift shot espresso ve mikro köpüklü sıcak süt.", icerikEn: "Double shot espresso and micro-foamed hot milk.", kalori: "120 kcal", resim: "flat_white.jpeg" },
        { kategori: "Sıcak Kahveler", kategoriEn: "Hot Coffees", ad: "Mocha", adEn: "Mocha", fiyat: 260, icerik: "Espresso, çikolata sosu ve sıcak süt.", icerikEn: "Espresso, chocolate sauce, and hot milk.", kalori: "290 kcal", resim: "mocha.jpeg" },
        { kategori: "Sıcak Kahveler", kategoriEn: "Hot Coffees", ad: "Latte", adEn: "Latte", fiyat: 220, icerik: "Espresso, bol sıcak süt ve hafif süt köpüğü.", icerikEn: "Espresso, plenty of hot milk, and light milk foam.", kalori: "150 kcal", resim: "latte.jpeg" },

        { kategori: "Aromalı Kahveler", kategoriEn: "Flavored Coffees", ad: "Caramel Latte", adEn: "Caramel Latte", fiyat: 260, icerik: "Espresso, sıcak süt ve karamel şurubu.", icerikEn: "Espresso, hot milk, and caramel syrup.", kalori: "220 kcal", resim: "caramel_latte.jpeg" },
        { kategori: "Aromalı Kahveler", kategoriEn: "Flavored Coffees", ad: "Vanilla Latte", adEn: "Vanilla Latte", fiyat: 260, icerik: "Espresso, sıcak süt ve vanilya şurubu.", icerikEn: "Espresso, hot milk, and vanilla syrup.", kalori: "210 kcal", resim: "vanilla_latte.jpeg" },
        { kategori: "Aromalı Kahveler", kategoriEn: "Flavored Coffees", ad: "Spanish Latte", adEn: "Spanish Latte", fiyat: 270, icerik: "Espresso, yoğunlaştırılmış tatlı süt ve normal süt.", icerikEn: "Espresso, sweetened condensed milk, and regular milk.", kalori: "250 kcal", resim: "spanish_latte.jpeg" },
        { kategori: "Aromalı Kahveler", kategoriEn: "Flavored Coffees", ad: "Salted Caramel Latte", adEn: "Salted Caramel Latte", fiyat: 260, icerik: "Tuzlu karamel şurubu, espresso ve sıcak süt.", icerikEn: "Salted caramel syrup, espresso, and hot milk.", kalori: "230 kcal", resim: "salted_caramel_latte.jpeg" },
        { kategori: "Aromalı Kahveler", kategoriEn: "Flavored Coffees", ad: "White Chocolate Mocha", adEn: "White Chocolate Mocha", fiyat: 260, icerik: "Beyaz çikolata sosu, espresso ve sıcak süt.", icerikEn: "White chocolate sauce, espresso, and hot milk.", kalori: "310 kcal", resim: "white_chocolate_mocha.jpeg" },

        { kategori: "Klasik Kahveler", kategoriEn: "Classic Coffees", ad: "Türk Kahvesi", adEn: "Turkish Coffee", fiyat: 140, icerik: "Geleneksel usulle pişirilmiş Türk kahvesi.", icerikEn: "Traditional Turkish coffee.", kalori: "7 kcal", resim: "turk_kahvesi.jpeg" },
        { kategori: "Klasik Kahveler", kategoriEn: "Classic Coffees", ad: "Dibek Kahvesi", adEn: "Dibek Coffee", fiyat: 160, icerik: "Özel havanda dövülmüş, yumuşak içimli yöresel kahve.", icerikEn: "Mortar ground, mild regional coffee.", kalori: "45 kcal", resim: "dibek_kahvesi.jpeg" },
        { kategori: "Klasik Kahveler", kategoriEn: "Classic Coffees", ad: "Menengiç Kahvesi", adEn: "Terebinth Coffee", fiyat: 160, icerik: "Kafeinsiz, sütle hazırlanan doğal menengiç kahvesi.", icerikEn: "Caffeine-free natural terebinth coffee made with milk.", kalori: "85 kcal", resim: "menengic_kahvesi.jpeg" },

        { kategori: "Çay Çeşitleri", kategoriEn: "Teas", ad: "Çay", adEn: "Turkish Black Tea", fiyat: 70, icerik: "Taze demlenmiş ince belli bardakta siyah çay.", icerikEn: "Freshly brewed traditional black tea.", kalori: "2 kcal", resim: "cay.jpeg" },
        { kategori: "Çay Çeşitleri", kategoriEn: "Teas", ad: "Yeşil Çay", adEn: "Green Tea", fiyat: 190, icerik: "Antioksidan deposu, doğal yaprak yeşil çay.", icerikEn: "Antioxidant-rich natural green tea.", kalori: "2 kcal", resim: "yesil_cay.jpeg" },
        { kategori: "Çay Çeşitleri", kategoriEn: "Teas", ad: "Kış Çayı", adEn: "Winter Tea", fiyat: 190, icerik: "Ihlamur, zencefil, tarçın ve narenciye karışımı doğal kış çayı.", icerikEn: "Winter tea with linden, ginger, cinnamon, and citrus.", kalori: "15 kcal", resim: "kis_cayi.jpeg" },
        { kategori: "Çay Çeşitleri", kategoriEn: "Teas", ad: "Ihlamur", adEn: "Linden Tea", fiyat: 190, icerik: "Limon dilimleri ile servis edilen doğal ıhlamur.", icerikEn: "Natural linden tea served with lemon slices.", kalori: "10 kcal", resim: "ihlamur.jpeg" },

        { kategori: "Non-Espresso", kategoriEn: "Non-Espresso", ad: "Sıcak Çikolata", adEn: "Hot Chocolate", fiyat: 200, icerik: "Yoğun eritilmiş çikolata ve sıcak süt.", icerikEn: "Rich melted chocolate and hot milk.", kalori: "350 kcal", resim: "sicak_cikolata.jpeg" },
        { kategori: "Non-Espresso", kategoriEn: "Non-Espresso", ad: "Salep", adEn: "Salep", fiyat: 200, icerik: "Üzeri tarçınlı, geleneksel sıcak salep.", icerikEn: "Traditional hot salep topped with cinnamon.", kalori: "280 kcal", resim: "salep.jpeg" },

        { kategori: "Soğuk Kahveler", kategoriEn: "Cold Coffees", ad: "Ice Americano", adEn: "Iced Americano", fiyat: 200, icerik: "Buz ve soğuk su ile hazırlanan sert espresso.", icerikEn: "Strong espresso over ice and cold water.", kalori: "15 kcal", resim: "ice_americano.jpeg" },
        { kategori: "Soğuk Kahveler", kategoriEn: "Cold Coffees", ad: "Ice Latte", adEn: "Iced Latte", fiyat: 220, icerik: "Buz, soğuk süt ve espresso dengesi.", icerikEn: "Perfect balance of ice, cold milk, and espresso.", kalori: "120 kcal", resim: "ice_latte.jpeg" },
        { kategori: "Soğuk Kahveler", kategoriEn: "Cold Coffees", ad: "Ice Filtre Kahve", adEn: "Iced Filter Coffee", fiyat: 210, icerik: "Buzlu, taze demlenmiş yöresel filtre kahve.", icerikEn: "Iced, freshly brewed regional filter coffee.", kalori: "5 kcal", resim: "ice_filtre_kahve.jpeg" },
        { kategori: "Soğuk Kahveler", kategoriEn: "Cold Coffees", ad: "Ice Mocha", adEn: "Iced Mocha", fiyat: 250, icerik: "Buz, soğuk süt, espresso ve enfes çikolata sosu.", icerikEn: "Ice, cold milk, espresso, and delicious chocolate sauce.", kalori: "260 kcal", resim: "ice_mocha.jpeg" },
        { kategori: "Soğuk Kahveler", kategoriEn: "Cold Coffees", ad: "Affogato", adEn: "Affogato", fiyat: 250, icerik: "Vanilyalı dondurma üzerine dökülen sıcak espresso shot.", icerikEn: "Hot espresso shot poured over vanilla ice cream.", kalori: "210 kcal", resim: "affogato.jpeg" },
        { kategori: "Soğuk Kahveler", kategoriEn: "Cold Coffees", ad: "Ice Cappuccino", adEn: "Iced Cappuccino", fiyat: 220, icerik: "Buz, soğuk süt, espresso ve yoğun süt köpüğü.", icerikEn: "Ice, cold milk, espresso, and thick milk foam.", kalori: "110 kcal", resim: "ice_cappuccino.jpeg" },
        { kategori: "Soğuk Kahveler", kategoriEn: "Cold Coffees", ad: "Lemon Espresso", adEn: "Lemon Espresso", fiyat: 260, icerik: "Taze limon ferahlığı ile buluşan espresso shot.", icerikEn: "Espresso shot blended with fresh lemon zest.", kalori: "45 kcal", resim: "lemon_espresso.jpeg" },
        { kategori: "Soğuk Kahveler", kategoriEn: "Cold Coffees", ad: "orange Espresso", adEn: "orange Espresso", fiyat: 260, icerik: "Taze portakal ferahlığı ile buluşan espresso shot.", icerikEn: "Espresso shot blended with fresh orange zest.", kalori: "45 kcal", resim: "orange_espresso.jpeg" },
        { kategori: "Soğuk Kahveler", kategoriEn: "Cold Coffees", ad: "Cold Brew", adEn: "Cold Brew", fiyat: 300, icerik: "16 saat soğuk suda demlenmiş, yumuşak içimli kahve.", icerikEn: "Smooth coffee cold-brewed for 16 hours.", kalori: "10 kcal", resim: "cold_brew.jpeg" },
        { kategori: "Soğuk Kahveler", kategoriEn: "Cold Coffees", ad: "Espresso Fizz", adEn: "Espresso Fizz", fiyat: 260, icerik: "Maden suyu, buz ve espresso karışımı ferahlatıcı lezzet.", icerikEn: "Refreshing mix of sparkling water, ice, and espresso.", kalori: "20 kcal", resim: "espresso_fizz.jpeg" },
        { kategori: "Soğuk Kahveler", kategoriEn: "Cold Coffees", ad: "Ice Balm Caffee", adEn: "Ice Balm Coffee", fiyat: 260, icerik: "Mekanın imza soğuk kahvesi, özel sunumuyla.", icerikEn: "The signature iced coffee of our place.", kalori: "180 kcal", resim: "ice_balm_caffee.jpeg" },

        { kategori: "Soğuk Aromalı Kahveler", kategoriEn: "Iced Flavored Coffees", ad: "Ice Spanish Latte", adEn: "Spanish Latte", fiyat: 260, icerik: "Yoğunlaştırılmış tatlı süt, buz, soğuk süt ve espresso.", icerikEn: "Sweet condensed milk, ice, cold milk, and espresso.", kalori: "250 kcal", resim: "ice_spanish_latte.jpeg" },
        { kategori: "Soğuk Aromalı Kahveler", kategoriEn: "Iced Flavored Coffees", ad: "Ice Caramel Latte", adEn: "Caramel Latte", fiyat: 260, icerik: "Buz, soğuk süt, espresso ve karamel şurubu.", icerikEn: "Ice, cold milk, espresso, and caramel syrup.", kalori: "220 kcal", resim: "ice_caramel_latte.jpeg" },
        { kategori: "Soğuk Aromalı Kahveler", kategoriEn: "Iced Flavored Coffees", ad: "Ice Vanilya Latte", adEn: "Vanilla Latte", fiyat: 260, icerik: "Buz, soğuk süt, espresso ve vanilya şurubu.", icerikEn: "Ice, cold milk, espresso, and vanilla syrup.", kalori: "210 kcal", resim: "ice_vanilya_latte.jpeg" },
        { kategori: "Soğuk Aromalı Kahveler", kategoriEn: "Iced Flavored Coffees", ad: "Ice White Chocolate Mocha", adEn: "White Chocolate Mocha", fiyat: 270, icerik: "Buz, soğuk süt, espresso ve beyaz çikolata sosu.", icerikEn: "Ice, cold milk, espresso, and white chocolate sauce.", kalori: "310 kcal", resim: "ice_white_chocolate_mocha.jpeg" },
        { kategori: "Soğuk Aromalı Kahveler", kategoriEn: "Iced Flavored Coffees", ad: "Ice Mocha", adEn: "Mocha", fiyat: 260, icerik: "Buz, soğuk süt, espresso ve çikolata.", icerikEn: "Ice, cold milk, espresso, and chocolate.", kalori: "280 kcal", resim: "ice_mocha.jpeg" },
        { kategori: "Soğuk Aromalı Kahveler", kategoriEn: "Iced Flavored Coffees", ad: "Ice Salted Caramel Latte", adEn: "Salted Caramel Latte", fiyat: 270, icerik: "Tuzlu karamel şurubu, buz, soğuk süt ve espresso.", icerikEn: "Salted caramel syrup, ice, cold milk, and espresso.", kalori: "230 kcal", resim: "ice_salted_caramel_latte.jpeg" },
        
        { kategori: "Smoothie", kategoriEn: "Smoothies", ad: "Golden Banana", adEn: "Golden Banana", fiyat: 250, icerik: "Taze muz, süt, bal ve buz ile harmanlanmış ferahlatıcı içecek.", icerikEn: "Refreshing blend of fresh banana, milk, honey, and ice.", kalori: "280 kcal", resim: "golden_banana.jpeg" },
        { kategori: "Smoothie", kategoriEn: "Smoothies", ad: "Strawberry Crush", adEn: "Strawberry Crush", fiyat: 250, icerik: "Çilek püresi, yoğurt ve buz karışımı.", icerikEn: "Strawberry puree, yogurt, and ice mix.", kalori: "250 kcal", resim: "strawberry_crush.jpeg" },

        { kategori: "Mokteyl", kategoriEn: "Mocktails", ad: "Lemon Espresso", adEn: "Lemon Espresso", fiyat: 260, icerik: "Espresso, taze limon suyu ve buzun ferahlatıcı uyumu.", icerikEn: "Refreshing harmony of espresso, fresh lemon juice, and ice.", kalori: "45 kcal", resim: "lemon_espresso.jpeg" },
        { kategori: "Mokteyl", kategoriEn: "Mocktails", ad: "Kuzu Kulağı", adEn: "Sorrel Mocktail", fiyat: 300, icerik: "Taze kuzu kulağı, yeşil elma ve ferahlatıcı aromalarla hazırlanan özel mokteyl.", icerikEn: "Special mocktail with sorrel, green apple, and fresh aromas.", kalori: "110 kcal", resim: "kuzu_kulagi.jpeg" },
        { kategori: "Mokteyl", kategoriEn: "Mocktails", ad: "Cool Lime", adEn: "Cool Lime", fiyat: 230, icerik: "Misket limonu, nane ve ferahlatıcı özler.", icerikEn: "Lime, mint, and refreshing extracts.", kalori: "90 kcal", resim: "cool_lime.jpeg" },
        { kategori: "Mokteyl", kategoriEn: "Mocktails", ad: "Churchill", adEn: "Churchill", fiyat: 180, icerik: "Maden suyu, taze sıkılmış limon suyu ve tuz.", icerikEn: "Sparkling water, fresh lemon juice, and salt.", kalori: "15 kcal", resim: "churchill.jpeg" },
        { kategori: "Mokteyl", kategoriEn: "Mocktails", ad: "Berry Hibiscus", adEn: "Berry Hibiscus", fiyat: 230, icerik: "Demlenmiş hibiskus çiçeği çayı, buz ve hafif meyvemsi notalar.", icerikEn: "Brewed hibiscus tea, ice, and light fruity notes.", kalori: "60 kcal", resim: "berry_hibiscus.jpeg" },
        { kategori: "Mokteyl", kategoriEn: "Mocktails", ad: "Virgin Mojito", adEn: "Virgin Mojito", fiyat: 260, icerik: "Taze nane, lime, esmer şeker ve soda.", icerikEn: "Fresh mint, lime, brown sugar, and sparkling water.", kalori: "110 kcal", resim: "virgin_mojito.jpeg" },
        { kategori: "Mokteyl", kategoriEn: "Mocktails", ad: "Limonata", adEn: "Lemonade", fiyat: 200, icerik: "Taze sıkılmış limon suyu, hafif tatlılık ve buzun serinletici uyumu.", icerikEn: "Freshly squeezed lemon juice perfectly balanced with a hint of sweetness and ice.", kalori: "120 kcal", resim: "limonata.jpeg" },
        { kategori: "Mokteyl", kategoriEn: "Mocktails", ad: "Çilekli Limonata", adEn: "Strawberry Lemonade", fiyat: 230, icerik: "Taze limonata ve doğal çilek püresinin nefis ferahlatıcı buluşması.", icerikEn: "Refreshing blend of freshly squeezed lemonade and natural strawberry puree.", kalori: "150 kcal", resim: "cilekli_limonata.jpeg" },
        { kategori: "Mokteyl", kategoriEn: "Mocktails", ad: "Balm Mokteyl", adEn: "Balm Mocktail", fiyat: 280, icerik: "Kafemize özel imza mokteyl; taze meyve özleri ve ferahlatıcı karışım.", icerikEn: "Our signature mocktail with fresh fruit extracts.", kalori: "130 kcal", resim: "balm_mokteyl.jpeg" },

        { kategori: "Matcha", kategoriEn: "Matcha", ad: "Matcha Latte", adEn: "Matcha Latte", fiyat: 220, icerik: "Premium Japon matcha tozu ve buharda ısıtılmış süt.", icerikEn: "Premium Japanese matcha powder and steamed milk.", kalori: "140 kcal", resim: "matcha_latte.jpeg" },
        { kategori: "Matcha", kategoriEn: "Matcha", ad: "Ice Matcha Latte", adEn: "Iced Matcha Latte", fiyat: 260, icerik: "Buzlu soğuk süt ve premium Japon matcha tozu.", icerikEn: "Iced cold milk and premium Japanese matcha powder.", kalori: "140 kcal", resim: "ice_matcha_latte.jpeg" },
        { kategori: "Matcha", kategoriEn: "Matcha", ad: "Ice Strawberry Matcha latte ", adEn: "Ice Strawberry Matcha latte", fiyat: 280, icerik: "Çilek püresi, soğuk süt, buz ve matcha tozu buluşması.", icerikEn: "Strawberry puree, cold milk, ice, and matcha powder.", kalori: "190 kcal", resim: "ice_strawberry_matcha_latte.jpeg" },
        { kategori: "Matcha", kategoriEn: "Matcha", ad: "ice banana bread matcha latte", adEn: "Banana Matcha", fiyat: 280, icerik: "Taze muz püresi, soğuk süt, buz ve matcha tozu.", icerikEn: "Fresh banana puree, cold milk, ice, and matcha powder.", kalori: "210 kcal", resim: "ice_banana_bread_matcha_latte.jpeg" },
        { kategori: "Matcha", kategoriEn: "Matcha", ad: "ice Peach Matcha", adEn: "Ice Peach Matcha", fiyat: 280, icerik: "Ferahlatıcı şeftali aroması, soğuk süt, buz ve matcha tozu.", icerikEn: "Refreshing peach flavor, cold milk, ice, and matcha.", kalori: "180 kcal", resim: "seftalili_ice_matcha_latte.jpeg" },
        { kategori: "Matcha", kategoriEn: "Matcha", ad: "ice Vanilla Matcha", adEn: "ice Vanilla Matcha", fiyat: 280, icerik: "vanilya şurubu, soğuk süt, buz ve matcha tozu.", icerikEn: "Refreshing vanilla flavor, cold milk, ice, and matcha.", kalori: "180 kcal", resim: "ice_vanilya_matcha_latte.jpeg" },
        
        { kategori: "Pour Over", kategoriEn: "Pour Over", ad: "V60 Colombia", adEn: "V60 Colombia", fiyat: 280, icerik: "Kolombiya çekirdeklerinin V60 yöntemiyle demlendiği, karamel ve meyvemsi notalara sahip filtre kahve.", icerikEn: "V60 brewed Colombian beans with caramel and fruity notes.", kalori: "5 kcal", resim: "v60_colombia.png" },
        { kategori: "Pour Over", kategoriEn: "Pour Over", ad: "V60 El Salvador", adEn: "V60 El Salvador", fiyat: 290, icerik: "El Salvador çekirdeklerinden V60 ile demlenmiş, çikolata ve tatlı baharat notalı kahve.", icerikEn: "V60 brewed El Salvador beans with chocolate and sweet spice notes.", kalori: "5 kcal", resim: "v60_el_salvador.png" },

        { kategori: "Ekstralar", kategoriEn: "Extras", ad: "Yulaf Sütü", adEn: "Oat Milk", fiyat: 60, icerik: "Kahveleriniz için bitkisel yulaf sütü alternatifi.", icerikEn: "Plant-based oat milk alternative for your coffee.", kalori: "+45 kcal", resim: "yulaf_sutu.jpeg" },
        { kategori: "Ekstralar", kategoriEn: "Extras", ad: "Badem Sütü", adEn: "Almond Milk", fiyat: 60, icerik: "Kahveleriniz için bitkisel badem sütü alternatifi.", icerikEn: "Plant-based almond milk alternative for your coffee.", kalori: "+30 kcal", resim: "badem_sutu.jpeg" },
        { kategori: "Ekstralar", kategoriEn: "Extras", ad: "Ekstra Şurup", adEn: "Extra Syrup", fiyat: 20, icerik: "Kahvenize ekstra tat katmak için şurup çeşitleri.", icerikEn: "Various syrups to add extra flavor to your coffee.", kalori: "+50 kcal", resim: "ekstra_surup.jpeg" },

        { kategori: "Tatlılar", kategoriEn: "Desserts", ad: "İngiliz Fudge Pasta", adEn: "English Fudge Cake", fiyat: 325, icerik: "Yoğun çikolatalı, ıslak ve akışkan karamel dokulu İngiliz pastası.", icerikEn: "Traditional English cake with rich chocolate and gooey caramel.", kalori: "450 kcal", resim: "ingiliz_fudge_pasta.jpeg" },
        { kategori: "Tatlılar", kategoriEn: "Desserts", ad: "San Sebastian", adEn: "San Sebastian Cheesecake", fiyat: 325, icerik: "İçi akışkan, üzeri hafif yanık pürüzsüz Bask usulü cheesecake.", icerikEn: "Basque style cheesecake with a burnt top and creamy center.", kalori: "400 kcal", resim: "san_sebastian.jpeg" },
        { kategori: "Tatlılar", kategoriEn: "Desserts", ad: "Balmkin", adEn: "Balmkin", fiyat: 425, icerik: "Özel katmanlı muhteşem lezzet; altında ipeksi muhallebi, üstünde balkabağı ve çıtır ceviz parçaları.", icerikEn: "A magnificent layered delight with silky pudding at the bottom, sweet pumpkin and crunchy walnuts on top.", kalori: "390 kcal", resim: "balmkin.jpeg" },
        { kategori: "Tatlılar", kategoriEn: "Desserts", ad: "Tiramisu Cup", adEn: "Tiramisu Cup", fiyat: 425, icerik: "Espresso ile ıslatılmış kedi dili ve orijinal mascarpone kreması.", icerikEn: "Ladyfingers soaked in espresso with original mascarpone cream.", kalori: "350 kcal", resim: "tiramisu_cup.jpeg" },
        { kategori: "Tatlılar", kategoriEn: "Desserts", ad: "Yaban Mersinli Krepli Pasta", adEn: "Blueberry Crepe Cake", fiyat: 325, icerik: "Kat kat ince krep hamuru arasına yaban mersini sosu ve krema.", icerikEn: "Layers of thin crepes with blueberry sauce and light cream.", kalori: "320 kcal", resim: "yaban_mersinli_krepli_pasta.jpeg" },
        { kategori: "Tatlılar", kategoriEn: "Desserts", ad: "Marlenka", adEn: "Marlenka", fiyat: 325, icerik: "Ceviz ve balın mükemmel uyumuyla hazırlanan kat kat Kafkas tatlısı.", icerikEn: "Layered Caucasian honey and walnut cake.", kalori: "420 kcal", resim: "marlenka.jpeg" },
        
       { kategori: "Sandviçler", kategoriEn: "Sandwiches", ad: "Pestolu Soğuk Sandviç", adEn: "Pesto Sandwich", fiyat: 250, icerik: "Hindi füme, kaşar peyniri, krem peynir, yeşillik ve taze pesto sos.", icerikEn: "Smoked turkey, kashar cheese, cream cheese, greens, and fresh pesto sauce.", kalori: "420 kcal", resim: "pestolu_soguk_sandvic.jpeg" },
        { kategori: "Sandviçler", kategoriEn: "Sandwiches", ad: "Acukalı Soğuk Sandviç", adEn: "Acuka Sandwich", fiyat: 250, icerik: "Acuka, krem peynir, hindi füme, cheddar peyniri ve kaşar.", icerikEn: "Acuka paste, cream cheese, smoked turkey, cheddar cheese, and kashar cheese.", kalori: "460 kcal", resim: "acukali_soguk_sandvic.jpeg" }
    ];

    const kategoriEmojileri = {
        "Sıcak Kahveler": "☕", "Aromalı Kahveler": "🤎", "Klasik Kahveler": "🧿",
        "Çay Çeşitleri": "🫖", "Non-Espresso": "🥛", "Soğuk Kahveler": "🧊",
        "Soğuk Aromalı Kahveler": "🥤", "Smoothie": "🍌", "Mokteyl": "🍹",
        "Matcha": "🍵", "Pour Over": "⏳", "Ekstralar": "✨",
        "Tatlılar": "🍰", "Sandviçler": "🥪"
    };

    const kategoriler = [...new Set(menuData.map(item => item.kategori))];
    let aktifKategori = kategoriler[0];
    
    const searchInput = document.getElementById("search-input");
    const categoryNav = document.getElementById("category-nav");
    const menuContainer = document.getElementById("menu-container");
    const urunModal = document.getElementById("modal");

    init();

    function init() {
        bindLanguageEvents();
        updateUITexts();
        renderKategoriler();
        renderUrunler(aktifKategori);

        searchInput.addEventListener("input", (e) => {
            const term = e.target.value.toLowerCase().trim();
            if(term === "") {
                categoryNav.style.display = "flex";
                renderUrunler(aktifKategori);
            } else {
                categoryNav.style.display = "none";
                const filtered = menuData.filter(item => 
                    item.ad.toLowerCase().includes(term) || 
                    item.adEn.toLowerCase().includes(term) || 
                    item.icerik.toLowerCase().includes(term) ||
                    item.icerikEn.toLowerCase().includes(term) ||
                    item.kategori.toLowerCase().includes(term) ||
                    item.kategoriEn.toLowerCase().includes(term)
                );
                renderUrunler(null, filtered);
            }
        });
    }

    function bindLanguageEvents() {
        document.getElementById("lang-tr").addEventListener("click", () => switchLanguage('tr'));
        document.getElementById("lang-en").addEventListener("click", () => switchLanguage('en'));
    }

    function switchLanguage(lang) {
        currentLang = lang;
        document.getElementById("lang-tr").classList.toggle("active", lang === 'tr');
        document.getElementById("lang-en").classList.toggle("active", lang === 'en');
        
        updateUITexts();
        renderKategoriler();       
        renderUrunler(aktifKategori); 
    }

    function updateUITexts() {
        const t = translations[currentLang];
        document.getElementById("search-input").placeholder = t.search_placeholder;
        setDynamicGreeting(); 
        document.getElementById("modal-cal-text").innerText = t.cal_text;
    }

    function setDynamicGreeting() {
        const hour = new Date().getHours();
        const t = translations[currentLang];
        let text = "";
        
        if(hour >= 6 && hour < 12) text = t.greeting_morning;
        else if(hour >= 12 && hour < 18) text = t.greeting_afternoon;
        else if(hour >= 18 && hour < 23) text = t.greeting_evening;
        else text = t.greeting_night;
        
        document.getElementById("greeting-text").innerText = text;
    }

    function renderKategoriler() {
        categoryNav.innerHTML = "";
        kategoriler.forEach((kategoriTR) => {
            const btn = document.createElement("button");
            btn.classList.add("category-btn");
            if (kategoriTR === aktifKategori) btn.classList.add("active");
            
            const emoji = kategoriEmojileri[kategoriTR] || "📌";
            
            let catName = kategoriTR;
            if (currentLang === 'en') {
                const sampleItem = menuData.find(item => item.kategori === kategoriTR);
                catName = sampleItem ? sampleItem.kategoriEn : kategoriTR;
            }
            
            btn.innerText = `${emoji} ${catName}`;
            
            btn.addEventListener("click", () => {
                document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                aktifKategori = kategoriTR; 
                searchInput.value = "";
                renderUrunler(aktifKategori);
            });
            categoryNav.appendChild(btn);
        });
    }

    function renderUrunler(kategoriAdi, ozelListe = null) {
        menuContainer.innerHTML = "";
        let data = ozelListe ? ozelListe : menuData.filter(item => item.kategori === kategoriAdi);

        if(data.length === 0) {
            menuContainer.innerHTML = `<p style='text-align:center; color:#888; margin-top:30px; font-weight:600;'>${translations[currentLang].not_found}</p>`;
            return;
        }

        data.forEach((urun) => {
            const itemDiv = document.createElement("div");
            itemDiv.className = "menu-item";
            itemDiv.addEventListener("click", () => openUrunModal(urun));
            
            const gosterilecekAd = currentLang === 'en' ? urun.adEn : urun.ad;
            const gosterilecekIcerik = currentLang === 'en' ? urun.icerikEn : urun.icerik;
            
            itemDiv.innerHTML = `
                <div class="item-info">
                    <h3>${gosterilecekAd}</h3>
                    <p class="item-description">${gosterilecekIcerik}</p>
                    <span class="item-meta">🔥 ${urun.kalori}</span>
                </div>
                <div class="item-price">${urun.fiyat} ₺</div>
            `;
            menuContainer.appendChild(itemDiv);
        });
    }

    function openUrunModal(urun) {
        const t = translations[currentLang];
        
        const ad = currentLang === 'en' ? urun.adEn : urun.ad;
        const desc = currentLang === 'en' ? urun.icerikEn : urun.icerik;

        document.getElementById("modal-title").innerText = ad;
        document.getElementById("modal-desc").innerText = desc;
        document.getElementById("modal-price").innerText = urun.fiyat + " ₺";
        document.getElementById("modal-meta").innerHTML = `🔥 <span id="modal-cal-text">${t.cal_text}</span>: ${urun.kalori}`;
        
        const imgElement = document.getElementById("modal-img");
        const iconElement = document.getElementById("modal-icon");

        if (urun.resim) {
            imgElement.src = "images/" + urun.resim;
            imgElement.style.display = "block";
            iconElement.style.display = "none";
            
            imgElement.onerror = function() {
                imgElement.style.display = "none";
                iconElement.innerText = kategoriEmojileri[urun.kategori] || "☕";
                iconElement.style.display = "flex";
            };
        } else {
            iconElement.innerText = kategoriEmojileri[urun.kategori] || "☕";
            iconElement.style.display = "flex";
            imgElement.style.display = "none";
        }
        
        urunModal.classList.add("show");
    }

    function closeUrunModal() {
        urunModal.classList.remove("show");
    }

    document.getElementById("close-modal-btn").addEventListener("click", closeUrunModal);
    
    window.addEventListener("click", (event) => {
        if (event.target === urunModal) closeUrunModal();
    });

});
