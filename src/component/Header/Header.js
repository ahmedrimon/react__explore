import image from '../../images/musuem__photo.jpg';

const Header = () => {
     return (
          <section className="mt-8 flex">
               <main className="w-6/12">
                         <img className="w-full mt-10 ml-10" src={image} alt="musuem photo" />
               </main>
               <main className="w-6/12">
                    <h2 className="w-2/3 ml-40 text-2vw font-monarch">Opinions are divided on online platforms where a large community of photographers share their photos for free. But here, this is not the debate. We want to put forward a selection of these photos and the talent of these photographers who are not always credited. Like a small digital museum experience, this website wants to highlight their work. Made with a lot of love and a bit of code</h2>
               </main>
          </section>
     );
};

export default Header;