import * as c from '@/app/components/index';

export default function NewconlangReference() {
  return (
    <c.Content domHeader="newconlang" subHeader="Reference">
      <h1 id="phonology">Phonology</h1>
      <h2 id="phonology-consonants">Consonants</h2>
      <table className="tableNormal">
        <tbody>
          <tr>
            <th> </th>
            <th>Bilabial</th>
            <th>Labiodental</th>
            <th>Dental</th>
            <th>Alveolar</th>
            <th>Velar</th>
          </tr>
          <tr>
            <th>Nasal</th>
            <td>m</td>
            <td className="opacity-0"></td>
            <td className="opacity-0"></td>
            <td>n</td>
            <td className="opacity-0"></td>
          </tr>
          <tr>
            <th>Plosive</th>
            <td className="whitespace-pre">p    b</td>
            <td className="opacity-0"></td>
            <td className="whitespace-pre">t    d</td>
            <td className="opacity-0"></td>
            <td className="opacity-0"></td>
          </tr>
          <tr>
            <th>Sibilant Affricate</th>
            <td className="opacity-0"></td>
            <td className="opacity-0"></td>
            <td className="opacity-0"></td>
            <td>ʣ</td>
            <td className="opacity-0"></td>
          </tr>
          <tr>
            <th>Non-Sibilant Fricative</th>
            <td className="opacity-0"></td>
            <td>v</td>
            <td>θ</td>
            <td className="opacity-0"></td>
            <td>x</td>
          </tr>
          <tr>
            <th>Approximant</th>
            <td className="opacity-0"></td>
            <td className="opacity-0"></td>
            <td className="opacity-0"></td>
            <td>ɹ</td>
            <td className="opacity-0"></td>
          </tr>
        </tbody>
      </table>
      <h2 id="phonology-vowels">Vowels</h2>
      <table className="tableNormal">
        <tbody>
          <tr>
            <th> </th>
            <th>Front</th>
            <th>Central</th>
            <th>Back</th>
          </tr>
          <tr>
            <th>Close</th>
            <td>i</td>
            <td className="opacity-0"></td>
            <td>u</td>
          </tr>
          <tr>
            <th>Close-Mid</th>
            <td className="opacity-0"></td>
            <td>ɵ</td>
            <td className="opacity-0"></td>
          </tr>
          <tr>
            <th>Open-Mid</th>
            <td>ɛ</td>
            <td className="opacity-0"></td>
            <td className="opacity-0"></td>
          </tr>
          <tr>
            <th>Open</th>
            <td>a</td>
            <td className="opacity-0"></td>
            <td className="opacity-0"></td>
          </tr>
        </tbody>
      </table>
    </c.Content>
  );
}