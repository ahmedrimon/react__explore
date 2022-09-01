import image from '../../images/musuem__photo.jpg';

const Header = () => {
     return (
          <section className="xl:flex sm:mt-8 xs:mt-3">
               <main className="sm:w-11/12">
                         <img className="sm:ml-7 xs:p-4 w-full mt-10" src={image} alt="musuem photo" />
               </main>
               <main className="3xl:mt-16 2xl:mt-52 xl:mt-40 sm:w-11/12 sm:mt-6">
                    <h2 className="3xl:text-5xl xl:text-xl xl:p-6 sm:text-1.2rem sm:ml-9 xs:p-4 font-monarch">Opinions are divided on online platforms where a large community of photographers share their photos for free. But here, this is not the debate. We want to put forward a selection of these photos and the talent of these photographers who are not always credited. Like a small digital museum experience, this website wants to highlight their work. Made with a lot of love and a bit of code</h2>
               </main>
          </section>
     );
};

export default Header;