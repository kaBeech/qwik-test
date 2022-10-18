import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
      <span>
        Made with ♡ by 
        <a href="https://www.kaBeech.com/" target="_blank">
        Kyle Beechly
          </a> with 
          <a href="https://www.builder.io/" target="_blank">
             Builder.io
          </a>
      </span>
      </footer>
    </>
  );
});
