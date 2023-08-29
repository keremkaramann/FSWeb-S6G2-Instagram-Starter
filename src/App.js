/* 
  Buradan başlayın ve iç içe geçmiş bileşenlere doğru ilerleyin.
  Projedeki tüm dosyalara kod eklenmesi gerekmez.
  Nerelerde değişiklik yapmanız gerektiğini anlamak için her dosyayı inceleyin.
*/

// State hook u import edin
import React, { useState } from "react";
import sahteVeri from "./sahte-veri";
import AramaÇubuğu from "./bilesenler/AramaCubugu/AramaCubugu";
import Gönderiler from "./bilesenler/Gonderiler/Gonderiler";
// Gönderiler (çoğul!) ve AramaÇubuğu bileşenlerini import edin, çünkü bunlar App bileşeni içinde kullanılacak
// sahteVeri'yi import edin
import "./App.css";

const App = () => {
  // Gönderi nesneleri dizisini tutmak için "gonderiler" adlı bir state oluşturun, **sahteVeri'yi yükleyin**.
  // Artık sahteVeri'ye ihtiyacınız olmayacak.
  // Arama çubuğunun çalışması için , arama kriterini tutacak başka bir state'e ihtiyacımız olacak.
  const [gonderiler, setGonderiler] = useState(sahteVeri);
  const [arama, setArama] = useState("");
  const [like, setLike] = useState([]);

  const gonderiyiBegen = (gonderiID) => {
    /*
      Bu fonksiyon, belirli bir id ile gönderinin beğeni sayısını bir artırma amacına hizmet eder.

      Uygulamanın durumu, React ağacının en üstünde bulunur, ancak iç içe geçmiş bileşenlerin stateleri değiştirememesi adil olmaz!
      Bu fonksiyon, belirli bir gönderinin beğeni sayısını artırılmasına olanak sağlamak amacıyla iç içe geçmiş bileşenlere aktarılır.

	  "setGonderi" yi çağırın ve state ine "posts.map" çağrısını iletin.
      `map` içine iletilen callback aşağıdaki mantığı gerçekleştirir:
        - gönderinin idsi "gonderiID" ile eşleşirse, istenen değerlerle yeni bir gönderi nesnesi döndürün.
        - aksi takdirde, sadece gönderi nesnesini değiştirmeden döndürün.
     */
    const increaseLike = gonderiler.map((item) => {
      if (gonderiID === item.id) {
        if (!like.includes(gonderiID)) {
          item.likes++;
          setLike([...like, gonderiID]);
        } else {
          item.likes--;
          like.splice(like.indexOf(gonderiID), 1);
          setLike([...like]);
        }
      }
      return item;
    });
    setGonderiler(increaseLike);
  };

  //arama
  const searchInput = (e) => {
    setArama(e.target.value);
    const searchResult = sahteVeri.filter((item) => {
      return item.username.includes(e.target.value);
    });
    setGonderiler(searchResult);
  };

  return (
    <div className="App">
      {/* Yukarıdaki metni projeye başladığınızda silin*/}
      {/* AramaÇubuğu ve Gönderiler'i render etmesi için buraya ekleyin */}
      {/* Her bileşenin hangi proplara ihtiyaç duyduğunu kontrol edin, eğer ihtiyaç varsa ekleyin! */}
      <AramaÇubuğu arama={arama} searchInput={searchInput} />
      <Gönderiler gonderiler={gonderiler} gonderiyiBegen={gonderiyiBegen} />
    </div>
  );
};

export default App;
