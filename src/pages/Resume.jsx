import { studies, experiences } from '../data/resume'
function Resume () {
  return (
  <>
    <h1>Mi resumen vida</h1>
    <section>
      <h2>Educación</h2>
      <ul>
        {studies.map(({id, title, institution, date }) => (
          <li key={id}>
            <h3>{title}</h3>
            <p>{institution}</p>
            <p>{date}</p>
          </li>
        ))
        }
      </ul>
      <h2>Experiencia</h2>
      <ul>
        {experiences.map(({id, title, company, date }) => (
          <li key={id}>
            <h3>{title}</h3>
            <p>{company}</p>
            <p>{date}</p>
          </li>
        ))
        }
      </ul>
    </section>
  </>
  )
}

export default Resume