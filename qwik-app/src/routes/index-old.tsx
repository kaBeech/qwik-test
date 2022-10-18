import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <h1>
        Hello World!!! <span class="lightning">⚡️</span>
      </h1>

      <ul>
        <li>
          This is how you make a list!
        </li>
        <li>
          This is how <code>you make an inline code snip</code>.
        </li>
        <li>
          Remember to update the <code>README.md</code>!
        </li>
      </ul>

      <h2>Table</h2>

      <table class="commands">
        <tr>
          <td>
            <code>I'm</code>
          </td>
          <td>leaving this</td>
        </tr>
        <tr>
          <td>
            <code>table</code>
          </td>
          <td>in</td>
        </tr>
        <tr>
          <td>
            <code>because</code>
          </td>
          <td>why</td>
        </tr>
        <tr>
          <td>
            <code>not</code>
          </td>
          <td>?</td>
        </tr>
      </table>

      <Link class="mindblow" href="/flower">
        Blow my mind 🤯
      </Link>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'This is a Boilerplate!!',
};
