import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { KaBeech } from '../icons/kaBeech';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        <a href="https://kaBeech.com/" target="_blank">
          <KaBeech />
        </a>
      </div>
      <ul>
        <li>
          <a href="https://qwik.builder.io/docs/components/overview/" target="_blank">
            These
          </a>
        </li>
        <li>
          <a href="https://qwik.builder.io/examples/introduction/hello-world/" target="_blank">
            Example
          </a>
        </li>
        <li>
          <a href="https://qwik.builder.io/tutorial/welcome/overview/" target="_blank">
            Links
          </a>
        </li>
      </ul>
    </header>
  );
});
