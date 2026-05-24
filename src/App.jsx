import React, { useState } from 'react';
import {
  FileText, BookOpen, AlertOctagon, Columns, Users, Database, ShieldCheck, Menu, X, Scale, Gavel, MessageSquare
} from 'lucide-react';

// --- COMPONENTES DE CADA SECCIÓN ---

function Resumen() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3 border-b pb-4">
        <FileText className="text-blue-600 w-8 h-8" />
        <h2 className="text-2xl font-bold text-slate-800">Resumen Ejecutivo del Caso</h2>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h3 className="text-xl font-semibold text-slate-800 mb-3">Contexto y Cronología del Incidente</h3>
        <p className="text-slate-600 mb-4 leading-relaxed">
          El 6 de octubre de 2021, Twitch Interactive (filial de Amazon) confirmó una de las vulneraciones de datos más masivas de la industria del streaming. Un usuario anónimo publicó un enlace magnet de BitTorrent en el foro 4chan, liberando un archivo de 125 GB. El atacante justificó su acción afirmando que buscaba "fomentar la disrupción y la competencia en el espacio de transmisión de video en línea", el cual describió como un "pozo negro tóxico".
        </p>
        <p className="text-slate-600 mb-4 leading-relaxed">
          La vulneración no fue producto de un ataque de fuerza bruta o de ingeniería social sofisticada, sino de un <strong>error de configuración en los servidores de la nube (AWS)</strong> durante un cambio de infraestructura, lo que dejó los repositorios internos expuestos a accesos no autorizados.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Gravedad y Alcance de la Filtración</h3>
        <ul className="list-disc pl-5 space-y-3 text-slate-600">
          <li><strong>Privacidad Financiera:</strong> Se publicaron los ingresos brutos (pagos, suscripciones y bits) de miles de creadores de contenido desde 2019. Casos emblemáticos como el canal <em>CriticalRole</em> vieron expuestos ingresos superiores a los 9 millones de dólares, generando riesgos inmediatos de extorsión, acoso y ataques de ingeniería social hacia los streamers.</li>
          <li><strong>Propiedad Intelectual Crítica:</strong> Se liberó la totalidad del código fuente de Twitch, abarcando su historial de commits desde sus inicios, clientes para consolas y móviles, y un proyecto secreto de tienda de juegos de Amazon Studio con el nombre en clave "Vapor", diseñado para competir con Steam.</li>
          <li><strong>Herramientas de Ciberseguridad:</strong> La filtración expuso las herramientas internas del equipo de <em>red teaming</em> (seguridad ofensiva) de Twitch, entregando a ciberdelincuentes un manual sobre cómo la plataforma detectaba y mitigaba las amenazas.</li>
        </ul>
      </div>
      <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 flex gap-4 mt-4">
        <Scale className="text-blue-600 shrink-0 w-6 h-6 mt-1" />
        <p className="text-sm text-blue-900 leading-relaxed">
          <strong>Premisa del Análisis Legal:</strong> Dado el carácter transnacional de Internet, y para efectos del presente informe analítico, se evaluará este incidente planteando el escenario hipotético de que Twitch opere infraestructura y procese datos bajo la jurisdicción exclusiva de la República de Chile.
        </p>
      </div>
    </div>
  );
}

function MarcoNormativo() {
  const leyes = [
    {
      titulo: "Ley 21.459: Delitos Informáticos (Chile)",
      desc: "Promulgada para adecuar la legislación nacional al Convenio de Budapest. Es el pilar para perseguir las acciones del atacante de 4chan, permitiendo tipificar el acceso no autorizado a los repositorios de AWS, la copia de los 125 GB y su posterior publicación maliciosa.",
      color: "border-red-200 bg-red-50"
    },
    {
      titulo: "Ley 19.628: Protección de la Vida Privada (Chile)",
      desc: "Regula el tratamiento de datos personales en el país. Se aplica para evaluar la negligencia de Twitch al no resguardar adecuadamente el historial financiero de los streamers, vulnerando los principios de finalidad, seguridad y los derechos ARCO de los titulares.",
      color: "border-emerald-200 bg-emerald-50"
    },
    {
      titulo: "Reglamento General de Protección de Datos (GDPR - UE)",
      desc: "El estándar global más exigente. Al tener Twitch usuarios en Europa, esta norma obliga a la empresa a notificar la brecha a las autoridades competentes en un plazo máximo de 72 horas y a implementar la privacidad por diseño, arriesgando multas millonarias por su falla.",
      color: "border-blue-200 bg-blue-50"
    },
    {
      titulo: "Computer Fraud and Abuse Act (CFAA - EE.UU.)",
      desc: "Legislación federal bajo la cual se persiguió penalmente el caso en la realidad. Sanciona el acceso a computadoras protegidas sin autorización para obtener información o causar daño a corporaciones, siendo el marco que el FBI utilizaría contra el atacante anónimo.",
      color: "border-purple-200 bg-purple-50"
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3 border-b pb-4">
        <BookOpen className="text-emerald-600 w-8 h-8" />
        <h2 className="text-2xl font-bold text-slate-800">Marco Normativo Aplicable</h2>
      </div>
      <p className="text-slate-600 mb-6 text-lg">
        La complejidad de este incidente requiere un análisis multidisciplinario que combine normativas nacionales de persecución penal con estándares internacionales de privacidad corporativa:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {leyes.map((ley, idx) => (
          <div key={idx} className={`p-6 rounded-lg border ${ley.color} shadow-sm transition hover:shadow-md`}>
            <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-lg">
              <Gavel className="w-5 h-5" /> {ley.titulo}
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">{ley.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Delitos() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3 border-b pb-4">
        <AlertOctagon className="text-red-600 w-8 h-8" />
        <h2 className="text-2xl font-bold text-slate-800">Tipificación de Delitos Informáticos</h2>
      </div>
      <p className="text-slate-600 text-lg mb-4">
        Bajo el marco de la <strong>Ley N° 21.459</strong>, el perpetrador de la filtración masiva enfrentaría un concurso de delitos, donde las acciones técnicas se mapean a los siguientes tipos penales:
      </p>

      <div className="space-y-5">
        <div className="bg-white p-6 rounded-lg border-l-4 border-l-red-500 shadow-sm">
          <h3 className="font-bold text-xl text-slate-800 mb-1">1. Acceso Ilícito</h3>
          <p className="text-sm font-semibold text-red-600 mb-3">Artículo 2°, Ley 21.459</p>
          <div className="text-slate-600 mb-3 text-sm leading-relaxed">
            <strong>Hecho del caso:</strong> El atacante escaneó y explotó una mala configuración en un servidor para penetrar la red corporativa de Twitch, superando la barrera perimetral.
          </div>
          <div className="bg-slate-100 p-4 rounded text-slate-800 text-sm border border-slate-200">
            <strong>Análisis legal:</strong> Sanciona al que, con la intención de conocer, vulnerar o dañar, acceda a un sistema informático superando medidas de seguridad. El inciso tercero establece un agravante si el acceso se realiza con el ánimo de apoderarse o usar la información, lo cual aplica directamente al robo del código fuente y los datos financieros, aumentando la pena potencial a presidio menor en su grado medio.
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border-l-4 border-l-orange-500 shadow-sm">
          <h3 className="font-bold text-xl text-slate-800 mb-1">2. Interceptación Ilícita</h3>
          <p className="text-sm font-semibold text-orange-600 mb-3">Artículo 3°, Ley 21.459</p>
          <div className="text-slate-600 mb-3 text-sm leading-relaxed">
            <strong>Hecho del caso:</strong> Descarga y captura de los 125 GB de bases de datos internas, incluyendo los historiales de pago que estaban en tránsito o reposo en los servidores.
          </div>
          <div className="bg-slate-100 p-4 rounded text-slate-800 text-sm border border-slate-200">
            <strong>Análisis legal:</strong> La ley castiga a quien intercepte, interrumpa o interfiera transmisiones de datos informáticos. Al copiar los registros de pagos de los creadores de contenido (datos no públicos), el atacante vulneró la confidencialidad de la información en origen, consumando este delito.
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border-l-4 border-l-yellow-500 shadow-sm">
          <h3 className="font-bold text-xl text-slate-800 mb-1">3. Receptación de Datos Informáticos</h3>
          <p className="text-sm font-semibold text-yellow-600 mb-3">Artículo 6°, Ley 21.459</p>
          <div className="text-slate-600 mb-3 text-sm leading-relaxed">
            <strong>Hecho del caso:</strong> Empaquetado de la información robada en un archivo torrent y su publicación masiva mediante un enlace magnético en 4chan.
          </div>
          <div className="bg-slate-100 p-4 rounded text-slate-800 text-sm border border-slate-200">
            <strong>Análisis legal:</strong> Sanciona explícitamente a quien conociendo su origen ilícito, comercialice, transfiera, almacene o distribuya datos informáticos. La publicación consciente en un foro público para perjudicar la reputación comercial de Amazon/Twitch configura claramente este tipo penal.
          </div>
        </div>
      </div>
    </div>
  );
}

function Comparacion() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3 border-b pb-4">
        <Columns className="text-indigo-600 w-8 h-8" />
        <h2 className="text-2xl font-bold text-slate-800">Comparación de Marcos Regulatorios</h2>
      </div>
      <p className="text-slate-600 mb-4 text-lg">
        La siguiente tabla contrasta cómo diferentes normativas abordan la negligencia técnica corporativa, demostrando las brechas actuales de la legislación chilena frente a estándares específicos de la industria:
      </p>
      <div className="overflow-x-auto rounded-lg border border-slate-300 shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-800 text-white">
              <th className="p-4 border-b font-semibold border-r border-slate-700">Eje de Análisis</th>
              <th className="p-4 border-b font-semibold border-r border-slate-700">Ley 19.628 (Chile)</th>
              <th className="p-4 border-b font-semibold border-r border-slate-700">GDPR (Europa)</th>
              <th className="p-4 border-b font-semibold bg-indigo-900">PCI-DSS (Industria Pagos)</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="border-b hover:bg-slate-50">
              <td className="p-4 font-bold text-slate-800 border-r border-slate-200">Alcance Jurisdiccional</td>
              <td className="p-4 text-slate-600 text-sm border-r border-slate-200">Territorial. Aplica a bases de datos alojadas o tratadas en Chile.</td>
              <td className="p-4 text-slate-600 text-sm border-r border-slate-200">Extraterritorial. Aplica globalmente si el usuario es ciudadano de la UE.</td>
              <td className="p-4 text-slate-600 text-sm bg-indigo-50/30">Específico por contrato. Obligatorio para procesadores de tarjetas.</td>
            </tr>
            <tr className="border-b hover:bg-slate-50">
              <td className="p-4 font-bold text-slate-800 border-r border-slate-200">Notificación de Brechas</td>
              <td className="p-4 text-red-600 text-sm font-medium border-r border-slate-200">No es obligatoria por ley, dejando a los usuarios en indefensión temporal.</td>
              <td className="p-4 text-emerald-600 text-sm font-medium border-r border-slate-200">Plazo máximo estricto de 72 horas para notificar a la autoridad.</td>
              <td className="p-4 text-emerald-600 text-sm font-medium bg-indigo-50/30">Alerta inmediata a bancos adquirentes y marcas de tarjetas.</td>
            </tr>
            <tr className="border-b hover:bg-slate-50">
              <td className="p-4 font-bold text-slate-800 border-r border-slate-200">Seguridad Técnica Exigida</td>
              <td className="p-4 text-slate-600 text-sm border-r border-slate-200">Menciona el "debido cuidado", sin especificar controles criptográficos.</td>
              <td className="p-4 text-slate-600 text-sm border-r border-slate-200">Exige medidas acordes al riesgo (cifrado, seudonimización).</td>
              <td className="p-4 text-slate-600 text-sm bg-indigo-50/30">Micro-segmentación de redes, Pentesting anual, MFA obligatorio.</td>
            </tr>
            <tr className="hover:bg-slate-50">
              <td className="p-4 font-bold text-slate-800 border-r border-slate-200">Aplicabilidad al caso Twitch</td>
              <td className="p-4 text-slate-600 text-sm border-r border-slate-200">Responsabilidad civil por daño al revelar ingresos de streamers.</td>
              <td className="p-4 text-slate-600 text-sm border-r border-slate-200">Investigación administrativa por fallas en la resiliencia del servidor.</td>
              <td className="p-4 text-slate-600 text-sm bg-indigo-50/30">Infracción crítica si la red financiera no estaba aislada del código fuente.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Responsabilidades() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3 border-b pb-4">
        <Users className="text-orange-600 w-8 h-8" />
        <h2 className="text-2xl font-bold text-slate-800">Actores y Responsabilidades Legales</h2>
      </div>
      <p className="text-slate-600 text-lg mb-2">
        En un incidente de ciberseguridad corporativo, el derecho chileno distingue claramente entre el autor del ilícito penal y los custodios de la información que fallaron en su resguardo técnico. Se identifican tres actores clave:
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

        {/* Atacante */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-md flex flex-col overflow-hidden">
          <div className="bg-slate-800 p-4 border-b-4 border-red-500">
            <h3 className="text-white font-bold text-lg text-center">1. El Atacante (Hacker)</h3>
            <p className="text-slate-300 text-xs text-center mt-1">Autor material del ilícito</p>
          </div>
          <div className="p-5 space-y-4 flex-1">
            <div>
              <strong className="text-red-600 border-b border-red-200 pb-1 flex w-full">Responsabilidad Penal:</strong>
              <p className="text-sm text-slate-700 mt-2">Principal imputado. Sujeto a las penas corporales estipuladas en la Ley 21.459 por el acceso a AWS, robo y receptación de los 125GB de datos.</p>
            </div>
            <div>
              <strong className="text-orange-600 border-b border-orange-200 pb-1 flex w-full">Responsabilidad Civil:</strong>
              <p className="text-sm text-slate-700 mt-2">Sujeto a responsabilidad extracontractual (Art. 2314 y 2329 del Código Civil). Obligado a reparar el daño patrimonial y moral causado a Twitch y a los streamers.</p>
            </div>
            <div>
              <strong className="text-slate-500 border-b border-slate-200 pb-1 flex w-full">Responsabilidad Administrativa:</strong>
              <p className="text-sm text-slate-600 mt-2 italic">Inexistente. Su accionar doloso recae en las esferas penal y civil civil.</p>
            </div>
          </div>
        </div>

        {/* Twitch */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-md flex flex-col overflow-hidden">
          <div className="bg-purple-700 p-4 border-b-4 border-purple-400">
            <h3 className="text-white font-bold text-lg text-center">2. Twitch Interactive</h3>
            <p className="text-purple-200 text-xs text-center mt-1">Custodio legal de la información</p>
          </div>
          <div className="p-5 space-y-4 flex-1">
            <div>
              <strong className="text-slate-500 border-b border-slate-200 pb-1 flex w-full">Responsabilidad Penal:</strong>
              <p className="text-sm text-slate-600 mt-2 italic">Inexistente. Bajo la Ley 20.393 de personas jurídicas, la plataforma es la víctima del sabotaje; el hackeo no fue cometido en su beneficio.</p>
            </div>
            <div>
              <strong className="text-orange-600 border-b border-orange-200 pb-1 flex w-full">Responsabilidad Civil:</strong>
              <p className="text-sm text-slate-700 mt-2">Severa responsabilidad por negligencia. El <strong>Art. 23 de la Ley 19.628</strong> obliga a indemnizar el daño patrimonial a los creadores cuyos pagos fueron expuestos.</p>
            </div>
            <div>
              <strong className="text-purple-600 border-b border-purple-200 pb-1 flex w-full">Responsabilidad Admin:</strong>
              <p className="text-sm text-slate-700 mt-2">Infracción directa al <strong>Art. 11 de la Ley 19.628</strong> (falla al debido cuidado). Exposición a fiscalización e intervención de autoridades de protección de datos.</p>
            </div>
          </div>
        </div>

        {/* Amazon */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-md flex flex-col overflow-hidden">
          <div className="bg-sky-700 p-4 border-b-4 border-sky-400">
            <h3 className="text-white font-bold text-lg text-center">3. Amazon</h3>
            <p className="text-sky-200 text-xs text-center mt-1">Empresa matriz y proveedor cloud</p>
          </div>
          <div className="p-5 space-y-4 flex-1">
            <div>
              <strong className="text-slate-500 border-b border-slate-200 pb-1 flex w-full">Responsabilidad Penal:</strong>
              <p className="text-sm text-slate-600 mt-2 italic">Inexistente, por los mismos motivos que aplican a su subsidiaria Twitch.</p>
            </div>
            <div>
              <strong className="text-orange-600 border-b border-orange-200 pb-1 flex w-full">Responsabilidad Civil:</strong>
              <p className="text-sm text-slate-700 mt-2">Posible responsabilidad civil solidaria (Art. 2320 del Código Civil) si se acredita que la matriz proveyó una arquitectura de nube (AWS) defectuosa para su filial.</p>
            </div>
            <div>
              <strong className="text-sky-600 border-b border-sky-200 pb-1 flex w-full">Responsabilidad Admin:</strong>
              <p className="text-sm text-slate-700 mt-2">Las agencias internacionales (como bajo el GDPR) suelen escalar las multas económicas calculándolas sobre los ingresos globales de la matriz si hay injerencia en las políticas corporativas.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function DatosPersonales() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3 border-b pb-4">
        <Database className="text-teal-600 w-8 h-8" />
        <h2 className="text-2xl font-bold text-slate-800">Tratamiento de Datos Personales (Ley 19.628)</h2>
      </div>

      <p className="text-slate-600 text-lg mb-6">
        La legislación chilena exige un tratamiento riguroso de la información, distinguiendo la naturaleza jurídica de los datos expuestos en el archivo torrent de 4chan:
      </p>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1 bg-white p-6 rounded-lg border-t-4 border-t-teal-500 shadow-md">
          <h3 className="font-bold text-teal-800 mb-2 text-xl">Datos Personales (Económicos)</h3>
          <p className="text-sm text-slate-700 leading-relaxed">
            Se filtraron nombres de usuario, contraseñas cifradas y el <strong>historial detallado de pagos y ganancias brutas</strong> desde 2019. Aunque la información financiera es de carácter económico, bajo la ley chilena es un dato personal que permite perfilar la capacidad adquisitiva del individuo, cuyo tratamiento indebido lo expone a fraudes y extorsión.
          </p>
        </div>
        <div className="flex-1 bg-white p-6 rounded-lg border-t-4 border-t-rose-500 shadow-md">
          <h3 className="font-bold text-rose-800 mb-2 text-xl">Datos Sensibles (Inferencia)</h3>
          <p className="text-sm text-slate-700 leading-relaxed">
            Las bases de datos internas contienen historiales de visualización y registros de chat. Mediante técnicas de Big Data, un atacante que cruce la información de las suscripciones o donaciones de un usuario puede inferir su <strong>orientación sexual, ideología política o estado de salud</strong>, transformando estos registros en datos jurídicamente sensibles.
          </p>
        </div>
      </div>

      <h3 className="font-bold text-xl text-slate-800 mb-4 border-b pb-2">Vulneración de los Derechos ARCO (Artículo 12)</h3>
      <p className="text-slate-600 mb-5 leading-relaxed">
        Ante esta negligencia en el resguardo de la información, los usuarios están facultados para ejercer sus Derechos ARCO amparados en el <strong>Artículo 12 de la Ley 19.628</strong>, el cual establece textualmente que: <br /><br />
        <em className="pl-4 border-l-4 border-slate-300 block text-slate-500">"Toda persona tiene derecho a exigir a quien se dedique al tratamiento de datos personales, información sobre los datos relativos a su persona, su procedencia y destinatario, el propósito del almacenamiento..."</em><br />
        Esto obliga a la plataforma a responder a las siguientes vulneraciones:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:border-slate-400 transition">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-slate-800 text-white w-8 h-8 rounded flex items-center justify-center font-bold text-lg">A</span>
            <strong className="text-lg text-slate-800">Derecho de Acceso</strong>
          </div>
          <p className="text-sm text-slate-600">El titular tiene derecho a exigir a Twitch que informe detalladamente qué datos específicos formaron parte del volcado de 125 GB y cómo fueron adquiridos inicialmente.</p>
        </div>

        <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:border-slate-400 transition">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-slate-800 text-white w-8 h-8 rounded flex items-center justify-center font-bold text-lg">R</span>
            <strong className="text-lg text-slate-800">Derecho de Rectificación</strong>
          </div>
          <p className="text-sm text-slate-600">Si la base de datos robada revela que Twitch mantenía información financiera o personal errónea o desactualizada, el usuario puede demandar su corrección inmediata.</p>
        </div>

        <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:border-slate-400 transition">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-slate-800 text-white w-8 h-8 rounded flex items-center justify-center font-bold text-lg">C</span>
            <strong className="text-lg text-slate-800">Derecho de Cancelación</strong>
          </div>
          <p className="text-sm text-slate-600">Al evidenciarse una falla crítica en la seguridad, el usuario tiene el derecho irrenunciable a revocar su consentimiento y exigir la eliminación permanente de su cuenta y tarjetas bancarias.</p>
        </div>

        <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:border-slate-400 transition">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-slate-800 text-white w-8 h-8 rounded flex items-center justify-center font-bold text-lg">O</span>
            <strong className="text-lg text-slate-800">Derecho de Oposición</strong>
          </div>
          <p className="text-sm text-slate-600">El usuario puede negarse a que Twitch siga tratando su información para fines estadísticos, de marketing o para entrenar algoritmos de recomendación, exigiendo el bloqueo de sus datos.</p>
        </div>
      </div>
    </div>
  );
}

function Conclusiones() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3 border-b pb-4">
        <ShieldCheck className="text-green-600 w-8 h-8" />
        <h2 className="text-2xl font-bold text-slate-800">Conclusiones y Recomendaciones de Seguridad</h2>
      </div>

      <div className="bg-white p-7 rounded-xl border border-slate-200 shadow-md">
        <h3 className="font-bold text-xl text-slate-800 mb-4 text-green-700">Mitigación Técnica y Organizativa</h3>
        <p className="text-slate-600 mb-5">
          Para prevenir vulnerabilidades arquitectónicas como la que sufrió Twitch, se recomiendan controles basados en el enfoque de Zero Trust (Confianza Cero):
        </p>
        <ul className="space-y-4 mb-8">
          <li className="flex gap-3 items-start bg-slate-50 p-3 rounded border border-slate-100">
            <div className="mt-1 w-2 h-2 rounded-full bg-green-500 shrink-0"></div>
            <div>
              <strong className="text-slate-800">Gestión de Configuración (IaC) Auditada:</strong>
              <p className="text-slate-600 text-sm mt-1">Dado que la brecha se originó por un error humano al configurar un servidor AWS, todo cambio en la infraestructura debe ser definido mediante código y sometido a pruebas automatizadas de seguridad antes de su despliegue en producción.</p>
            </div>
          </li>
          <li className="flex gap-3 items-start bg-slate-50 p-3 rounded border border-slate-100">
            <div className="mt-1 w-2 h-2 rounded-full bg-green-500 shrink-0"></div>
            <div>
              <strong className="text-slate-800">Micro-segmentación Estricta:</strong>
              <p className="text-slate-600 text-sm mt-1">Separar drásticamente los entornos de desarrollo (código fuente) de las bases de datos de producción (finanzas de los usuarios). Un atacante que comprometa un servidor no debe tener línea de visión hacia el repositorio central de la empresa.</p>
            </div>
          </li>
          <li className="flex gap-3 items-start bg-slate-50 p-3 rounded border border-slate-100">
            <div className="mt-1 w-2 h-2 rounded-full bg-green-500 shrink-0"></div>
            <div>
              <strong className="text-slate-800">Plan de Respuesta ante Incidentes (IRP) Ágil:</strong>
              <p className="text-slate-600 text-sm mt-1">Establecer protocolos de contención automatizados y cumplir con estándares internacionales (como las 72 horas del GDPR) para notificar a los usuarios, permitiéndoles rotar sus contraseñas antes de que los datos sean subastados o publicados en la Dark Web.</p>
            </div>
          </li>
        </ul>

        <div className="bg-slate-800 p-6 rounded-lg shadow-inner">
          <h3 className="font-bold text-white mb-3 text-lg">Reflexión Legal y Sistémica</h3>
          <p className="text-slate-300 italic leading-relaxed">
            "El caso de Twitch reafirma que la ciberseguridad trasciende el ámbito tecnológico para convertirse en una obligación fiduciaria y legal. La filtración del salario y la identidad financiera de miles de creadores de contenido es una violación directa a su seguridad física y digital. <br /><br />
            Al analizarlo desde el contexto nacional, si bien la promulgación de la <strong>Ley 21.459</strong> nos otorga herramientas modernas para perseguir y penalizar el robo y la receptación de estos 125 GB de datos, existe un vacío crítico en la <strong>Ley 19.628</strong> actual: la falta de obligatoriedad de notificar incidentes. Una infraestructura corporativa resiliente debe estar forzosamente acompañada de un marco legal proactivo que no solo sancione al infractor, sino que obligue a la empresa a ser transparente, garantizando así los derechos fundamentales de los usuarios frente al ecosistema tecnológico global."
          </p>
        </div>
      </div>
    </div>
  );
}

function Prompts() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3 border-b pb-4">
        <MessageSquare className="text-pink-600 w-8 h-8" />
        <h2 className="text-2xl font-bold text-slate-800">Bitácora de IA y Prompts</h2>
      </div>

      <div className="space-y-6">

        {/* Sección de Prompts Utilizados */}
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
          <h3 className="font-bold text-lg text-slate-800 mb-4 border-b pb-2">1. Registro de Prompts (Gemini)</h3>

          <div className="space-y-6">
            {/* 14 de Mayo */}
            <div>
              <h4 className="font-bold text-slate-700 mb-3 flex items-center gap-2">
                <span className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-xs">14 de Mayo</span>
                Investigación y Desarrollo Base
              </h4>
              <div className="space-y-3 pl-2 border-l-2 border-slate-100">
                <div className="bg-slate-50 p-3 rounded border border-slate-100">
                  <span className="text-pink-600 font-bold text-xs uppercase mb-1 block">Contexto y Leyes</span>
                  <p className="text-sm text-slate-600 italic">"Primero que todo tengo que definir mi tema... El caso a analizar puede provenir de cualquier parte... Independientemente del país, el análisis legal debe aplicar la legislación chilena (Ley 21.459 y Ley 19.628)..."</p>
                </div>
                <div className="bg-slate-50 p-3 rounded border border-slate-100">
                  <span className="text-pink-600 font-bold text-xs uppercase mb-1 block">Investigación</span>
                  <p className="text-sm text-slate-600 italic">"Dame informacion sobre el caso de filtracion de datos de twitch en el año 2021 de los creadores de contenido."</p>
                </div>
                <div className="bg-slate-50 p-3 rounded border border-slate-100">
                  <span className="text-pink-600 font-bold text-xs uppercase mb-1 block">Estructura Markdown</span>
                  <p className="text-sm text-slate-600 italic">"Ahora completa este otro archivo también en md... Leyes y regulaciones aplicables al caso, nacionales e internacionales (mínimo 4 normas justificadas)."</p>
                </div>
                <div className="bg-slate-50 p-3 rounded border border-slate-100">
                  <span className="text-pink-600 font-bold text-xs uppercase mb-1 block">Delitos y Comparación</span>
                  <p className="text-sm text-slate-600 italic">"Necesito realizar una tipificacion de los delitos segun la Ley 21.459... Ahora necesito seguir con el md. de comparacion..."</p>
                </div>
                <div className="bg-slate-50 p-3 rounded border border-slate-100">
                  <span className="text-pink-600 font-bold text-xs uppercase mb-1 block">Responsabilidades</span>
                  <p className="text-sm text-slate-600 italic">"Y ahora debo realizar el quinto md. el cual debe contemplar: Actores identificados y sus responsabilidades penales, civiles y administrativas..."</p>
                </div>
                <div className="bg-slate-50 p-3 rounded border border-slate-100">
                  <span className="text-blue-600 font-bold text-xs uppercase mb-1 block">Desarrollo Web (React)</span>
                  <p className="text-sm text-slate-600 italic">"Te cuento que en relacion con todo este proyecto debo realizar una aplicacion en react + vite... Quiero que realices un tipo informe interactivo en una pagina html, y dame el codigo..."</p>
                </div>
              </div>
            </div>

            {/* 24 de Mayo */}
            <div className="pt-2">
              <h4 className="font-bold text-slate-700 mb-3 flex items-center gap-2">
                <span className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-xs">24 de Mayo</span>
                Refinamiento y Mejoras
              </h4>
              <div className="space-y-3 pl-2 border-l-2 border-slate-100">
                <div className="bg-orange-50 p-3 rounded border border-orange-100">
                  <span className="text-orange-600 font-bold text-xs uppercase mb-1 block">Corrección de Profundidad</span>
                  <p className="text-sm text-slate-800 italic font-medium">"oye mira mi proyecto me gusto bastante pero me gustaria que quedara mas completo y tuviera mas enfasis en el contenido como tal, siendo que tiene muy poca informacion sobre el tema"</p>
                </div>
                <div className="bg-slate-50 p-3 rounded border border-slate-100">
                  <span className="text-blue-600 font-bold text-xs uppercase mb-1 block">Integración Final</span>
                  <p className="text-sm text-slate-600 italic">"Ahora me gustaria que mi profesor pudiera ver los prompts que utilice desde la misma aplicacion, podemos agregarlo en alguna parte?"</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Correcciones */}
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
          <h3 className="font-bold text-lg text-slate-800 mb-4 border-b pb-2">2. Correcciones a la IA</h3>
          <ul className="space-y-4 text-sm text-slate-600">
            <li className="flex gap-3">
              <AlertOctagon className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
              <span>
                <strong>Exigencia de Profundidad (24 de mayo):</strong> El código inicial de React entregado por la IA contenía un resumen muy breve. Fue necesario instruir a la IA mediante un nuevo prompt para que inyectara el análisis legal completo (citando expresamente la normativa y añadiendo a Amazon como 3er actor) para asegurar el cumplimiento total de la rúbrica.
              </span>
            </li>
            <li className="flex gap-3">
              <AlertOctagon className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
              <span>
                <strong>Estructura del Código:</strong> La IA generó un componente masivo difícil de ubicar. Se debió utilizar el prompt 8 para obligar a la IA a dar instrucciones precisas de arquitectura de archivos en Vite.
              </span>
            </li>
          </ul>
        </div>

        {/* Reflexión Final */}
        <div className="bg-slate-800 p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-white mb-3 text-lg">3. Reflexión Final: Chatbot vs. Agente</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            Utilizar a Gemini como <strong>Chatbot externo</strong> fue clave en la primera etapa para aterrizar conceptos legales, estructurar los Markdown y simular el escenario hipotético de cruzar el caso internacional de Twitch con la legislación chilena (Ley 21.459 y 19.628).
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            Sin embargo, al solicitarle generar la aplicación web, la dinámica requirió manejarla como un <strong>Agente generador de código</strong>. Si bien estructuró rápidamente Tailwind y React, la IA tendió a resumir demasiado el texto para que cupiera visualmente. Esto demuestra que la IA agiliza la maquetación técnica, pero el criterio analítico y la orden de profundizar en las leyes dependen enteramente del desarrollador que guía a la herramienta.
          </p>
        </div>

      </div>
    </div>
  );
}

// --- APLICACIÓN PRINCIPAL (APP) ---

export default function App() {
  const [activeTab, setActiveTab] = useState('resumen');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'resumen', label: 'Resumen Ejecutivo', icon: FileText },
    { id: 'marco', label: 'Marco Normativo', icon: BookOpen },
    { id: 'delitos', label: 'Delitos (Ley 21.459)', icon: AlertOctagon },
    { id: 'comparacion', label: 'Comparación Marcos', icon: Columns },
    { id: 'responsabilidades', label: 'Responsabilidades', icon: Users },
    { id: 'datos', label: 'Datos Personales', icon: Database },
    { id: 'conclusiones', label: 'Conclusiones', icon: ShieldCheck },
    { id: 'prompts', label: 'Bitácora de IA', icon: MessageSquare }, // NUEVA PESTAÑA AÑADIDA
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'resumen': return <Resumen />;
      case 'marco': return <MarcoNormativo />;
      case 'delitos': return <Delitos />;
      case 'comparacion': return <Comparacion />;
      case 'responsabilidades': return <Responsabilidades />;
      case 'datos': return <DatosPersonales />;
      case 'conclusiones': return <Conclusiones />;
      case 'prompts': return <Prompts />;
      default: return <Resumen />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row font-sans">

      {/* Botón menú móvil */}
      <div className="md:hidden bg-slate-900 text-white p-4 flex justify-between items-center shadow-md z-20">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-red-400" />
          <span className="font-bold">Informe Legal - informe_barmic</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Menú Lateral (Sidebar) */}
      <aside className={`
        ${isMobileMenuOpen ? 'block' : 'hidden'} 
        md:flex flex-col w-full md:w-72 bg-slate-900 text-slate-300 flex-shrink-0 shadow-2xl
        absolute md:relative z-10 min-h-screen
      `}>
        <div className="p-7 hidden md:block border-b border-slate-800">
          <div className="flex items-center gap-3 text-white mb-3">
            <ShieldCheck className="text-red-400 w-9 h-9" />
            <h1 className="text-xl font-bold leading-tight">Análisis Legal de Ciberseguridad</h1>
          </div>
          <p className="text-xs text-slate-400 mt-2 tracking-wide uppercase font-semibold">Fundamentos de Seguridad</p>
          <p className="text-xs font-mono text-slate-500 mt-1 bg-slate-800 inline-block px-2 py-1 rounded">informe_barmic</p>
        </div>

        <nav className="mt-4 md:mt-6 flex flex-col gap-2 px-4 pb-8 flex-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            // Estilo especial para el botón de Prompts
            const isPromptsTab = item.id === 'prompts';

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`
                  flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-200
                  ${isActive && !isPromptsTab ? 'bg-blue-600 text-white font-semibold shadow-lg shadow-blue-900/50 transform scale-[1.02]' : ''}
                  ${isActive && isPromptsTab ? 'bg-pink-600 text-white font-semibold shadow-lg shadow-pink-900/50 transform scale-[1.02]' : ''}
                  ${!isActive ? 'hover:bg-slate-800 hover:text-white hover:translate-x-1' : ''}
                  ${!isActive && isPromptsTab ? 'border border-slate-700/50 mt-4' : ''}
                `}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : (isPromptsTab ? 'text-pink-400' : 'text-slate-400')}`} />
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Contenido Principal */}
      <main className="flex-1 bg-slate-50 p-6 md:p-10 lg:p-12 h-screen overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {renderContent()}
        </div>

        {/* Footer simple integrado */}
        <footer className="max-w-4xl mx-auto mt-16 pt-8 border-t border-slate-200 text-center md:text-left flex flex-col md:flex-row justify-between text-sm text-slate-500 font-medium">
          <span className="mb-2 md:mb-0">Estudiante: Michele Barriga</span>
          <span>Docente: Rubén Schnettler L. - INACAP</span>
        </footer>
      </main>

    </div>
  );
} 