import * as c from "@/app/components/index";

export default function NakeReference() {
  return (
    <c.Content domHeader="Nake" subHeader="Reference">
      <h1 id="phonology">Phonology</h1>
      <h2 id="phonology-consonants">Consonants</h2>
      <table className="tableNormal">
        <tbody>
          <tr>
            <th> </th>
            <th>Dental</th>
            <th>Alveolar</th>
            <th>Post-Alveolar</th>
            <th>Velar</th>
          </tr>
          <tr>
            <th>Nasal</th>
            <td className="opacity-0"></td>
            <td>n</td>
          </tr>
          <tr>
            <th>Plosive</th>
            <td className="opacity-0"></td>
            <td className="whitespace-pre">t d</td>
            <td className="opacity-0"></td>
            <td className="whitespace-pre">k g</td>
          </tr>
          <tr>
            <th>Sibilant Africate</th>
            <td className="opacity-0"></td>
            <td className="whitespace-pre">ʦ ʣ</td>
          </tr>
          <tr>
            <th>Sibilant Fricative</th>
            <td className="opacity-0"></td>
            <td className="whitespace-pre">s z</td>
          </tr>
          <tr>
            <th>Non-Sibilant Fricative</th>
            <td className="whitespace-pre">θ ð</td>
          </tr>
          <tr>
            <th>Approximant</th>
            <td className="opacity-0"></td>
            <td className="opacity-0"></td>
            <td>ɹ̠</td>
          </tr>
          <tr>
            <th>Lateral Approximant</th>
            <td className="opacity-0"></td>
            <td>l</td>
          </tr>
        </tbody>
      </table>
      <br />
      <h2 id="phonology-vowels">Vowels</h2>
      <table>
        <tbody>
          <tr>
            <th> </th>
            <th>Front</th>
            <th>Back</th>
          </tr>
          <tr>
            <th>Close</th>
            <td>i</td>
          </tr>
          <tr>
            <th>Close-Mid</th>
            <td>e</td>
          </tr>
          <tr>
            <th>Open-Mid</th>
            <td>ɛ</td>
          </tr>
          <tr>
            <th>Open</th>
            <td className="opacity-0"></td>
            <td>ɑ</td>
          </tr>
        </tbody>
      </table>
      <br />
    </c.Content>
  );
}
