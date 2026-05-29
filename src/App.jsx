import React, { useState, useEffect } from 'react';
import {
  FileText, BookOpen, AlertOctagon, Columns, Users, Database, ShieldCheck, Menu, X, Scale, Gavel, MessageSquare, Terminal, LockOpen, Skull, AlertTriangle, Fingerprint, Eye, ServerCrash, Bookmark, Printer, Sun, Moon
} from 'lucide-react';

// --- COMPONENTES DE CADA SECCIÓN ---

function Resumen() {
  return (
    <div className="space-y-6 animate-fade-in text-slate-300">
      <div className="flex items-center gap-3 border-b border-purple-800/50 pb-4">
        <Terminal className="text-purple-500 w-8 h-8" />
        <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Reporte de Incidente</h2>
      </div>

      {/* Banner de Peligro */}
      <div className="bg-red-950/40 border border-red-500/50 p-4 rounded-lg flex items-start gap-4 shadow-[0_0_15px_rgba(239,68,68,0.15)]">
        <AlertTriangle className="text-red-500 w-8 h-8 shrink-0 animate-pulse" />
        <div>
          <h3 className="text-red-400 font-bold uppercase tracking-widest text-sm mb-1">Nivel de Gravedad: Crítico</h3>
          <p className="text-sm text-red-200/80">Filtración masiva confirmada. 125 GB de datos exfiltrados y publicados en foros públicos (4chan). Riesgo extremo para la privacidad de los usuarios e integridad de la propiedad intelectual.</p>
        </div>
      </div>

      <div className="bg-slate-900 p-6 rounded-lg border border-slate-700/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
        <h3 className="text-xl font-semibold text-purple-400 mb-3 flex items-center gap-2">
          <Eye className="w-5 h-5" /> Contexto y Cronología
        </h3>
        <p className="text-slate-400 mb-4 leading-relaxed">
          El 6 de octubre de 2021, <span className="text-purple-300 font-semibold">Twitch Interactive</span> (filial de <span className="text-orange-400 font-semibold">Amazon</span>) confirmó una de las vulneraciones de datos más masivas de la industria del streaming. Un usuario anónimo publicó un enlace magnet de BitTorrent en el foro 4chan, liberando un archivo de <span className="font-mono bg-red-900/50 text-red-300 px-1 py-0.5 rounded">125 GB</span>. El atacante justificó su acción afirmando que buscaba "fomentar la disrupción y la competencia en el espacio de transmisión de video en línea", el cual describió como un "pozo negro tóxico".
        </p>
        <p className="text-slate-400 mb-4 leading-relaxed">
          La vulneración no fue producto de un ataque de fuerza bruta o de ingeniería social sofisticada, sino de un <strong className="text-red-400">error de configuración en los servidores de la nube (AWS)</strong> durante un cambio de infraestructura, lo que dejó los repositorios internos expuestos a accesos no autorizados.
        </p>

        <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-8 flex items-center gap-2">
          <ServerCrash className="w-5 h-5" /> Gravedad y Alcance
        </h3>
        <ul className="space-y-4 text-slate-400">
          <li className="bg-slate-950 p-4 rounded border border-slate-800">
            <strong className="text-emerald-400 font-mono block mb-1">&gt;&gt; PRIVACIDAD_FINANCIERA.sys</strong>
            Se publicaron los ingresos brutos (pagos, suscripciones y bits) de miles de creadores de contenido desde 2019. Casos emblemáticos como el canal <em>CriticalRole</em> vieron expuestos ingresos superiores a los 9 millones de dólares, generando riesgos inmediatos de extorsión y ataques hacia los streamers.
          </li>
          <li className="bg-slate-950 p-4 rounded border border-slate-800">
            <strong className="text-blue-400 font-mono block mb-1">&gt;&gt; PROPIEDAD_INTELECTUAL.src</strong>
            Se liberó la totalidad del código fuente de Twitch, historial de commits, clientes para consolas, y un proyecto secreto de tienda de juegos de Amazon Studio con el nombre en clave "Vapor".
          </li>
          <li className="bg-slate-950 p-4 rounded border border-slate-800">
            <strong className="text-red-400 font-mono block mb-1">&gt;&gt; HERRAMIENTAS_CIBERSEGURIDAD.exe</strong>
            La filtración expuso las herramientas del equipo de <em>red teaming</em> (seguridad ofensiva) de Twitch, entregando a ciberdelincuentes un manual sobre cómo la plataforma mitigaba las amenazas.
          </li>
        </ul>
      </div>

      <div className="bg-blue-950/30 p-5 rounded-lg border border-blue-800/50 flex gap-4 mt-4">
        <Scale className="text-blue-400 shrink-0 w-6 h-6 mt-1" />
        <p className="text-sm text-blue-200 leading-relaxed">
          <strong className="text-blue-300">Premisa del Análisis Legal:</strong> Dado el carácter transnacional de Internet, y para efectos del presente informe analítico, se evaluará este incidente planteando el escenario hipotético de que Twitch opere infraestructura y procese datos bajo la jurisdicción exclusiva de la República de Chile.
        </p>
      </div>
    </div>
  );
}

function MarcoNormativo() {
  const leyes = [
    {
      titulo: "Ley 21.459: Delitos Informáticos (CL)",
      desc: "Promulgada para adecuar la legislación nacional al Convenio de Budapest. Es el pilar para perseguir las acciones del atacante de 4chan, permitiendo tipificar el acceso no autorizado a los repositorios de AWS y la publicación maliciosa.",
      color: "border-red-500/50 bg-red-950/20",
      textGlow: "text-red-400"
    },
    {
      titulo: "Ley 19.628: Privacidad (CL)",
      desc: "Regula el tratamiento de datos personales en el país. Se aplica para evaluar la negligencia de Twitch al no resguardar el historial financiero, vulnerando los principios de finalidad, seguridad y los derechos ARCO.",
      color: "border-emerald-500/50 bg-emerald-950/20",
      textGlow: "text-emerald-400"
    },
    {
      titulo: "GDPR (Unión Europea)",
      desc: "El estándar global más exigente. Obliga a notificar la brecha a las autoridades en un plazo máximo de 72 horas tras extraer los 125 GB, arriesgando multas millonarias por su falla frente a estándares de excelencia.",
      color: "border-blue-500/50 bg-blue-950/20",
      textGlow: "text-blue-400"
    },
    {
      titulo: "CFAA (Estados Unidos)",
      desc: "Legislación federal bajo la cual se persiguió penalmente el caso en la realidad. Sanciona el acceso a computadoras protegidas (como los servidores de AWS de Amazon) sin autorización para causar daño comercial.",
      color: "border-purple-500/50 bg-purple-950/20",
      textGlow: "text-purple-400"
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in text-slate-300">
      <div className="flex items-center gap-3 border-b border-purple-800/50 pb-4">
        <BookOpen className="text-emerald-500 w-8 h-8" />
        <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Marco Normativo</h2>
      </div>
      <p className="text-slate-400 mb-6 text-lg">
        La complejidad del incidente requiere un análisis que combine persecución penal nacional con estándares internacionales de privacidad:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {leyes.map((ley, idx) => (
          <div key={idx} className={`p-6 rounded-lg border ${ley.color} relative overflow-hidden group hover:bg-slate-800/50 transition-colors`}>
            <div className="absolute top-0 right-0 p-2 opacity-10">
              <Gavel className="w-16 h-16" />
            </div>
            <h3 className={`font-bold mb-3 flex items-center gap-2 text-lg ${ley.textGlow}`}>
              {ley.titulo}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed relative z-10">{ley.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Delitos() {
  return (
    <div className="space-y-6 animate-fade-in text-slate-300">
      <div className="flex items-center gap-3 border-b border-purple-800/50 pb-4">
        <Skull className="text-red-500 w-8 h-8" />
        <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Tipificación de Delitos</h2>
      </div>
      <p className="text-slate-400 text-lg mb-4">
        Bajo la <strong className="text-white">Ley N° 21.459 (Chile)</strong>, el perpetrador de la filtración masiva enfrentaría un concurso de delitos:
      </p>

      <div className="space-y-5 font-mono">
        <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 border-l-4 border-l-red-500 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-xl text-white uppercase">Acceso Ilícito</h3>
            <span className="bg-red-950 text-red-400 border border-red-800 px-2 py-1 text-xs rounded">Art. 2°, Ley 21.459</span>
          </div>
          <div className="text-slate-400 mb-3 text-sm leading-relaxed border-b border-slate-800 pb-3">
            <span className="text-red-500 mr-2">&gt;[HECHO]:</span> El atacante escaneó y explotó una mala configuración en un servidor para penetrar la red corporativa, superando la barrera perimetral.
          </div>
          <div className="text-slate-300 text-sm">
            <span className="text-emerald-500 mr-2">&gt;[ANÁLISIS]:</span> Sanciona al que acceda a un sistema superando medidas de seguridad. El <strong>inciso tercero establece un agravante</strong> si el acceso se realiza con el <em>ánimo de apoderarse o usar la información</em> (robo del código fuente y finanzas).
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 border-l-4 border-l-orange-500 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-xl text-white uppercase">Interceptación Ilícita</h3>
            <span className="bg-orange-950 text-orange-400 border border-orange-800 px-2 py-1 text-xs rounded">Art. 3°, Ley 21.459</span>
          </div>
          <div className="text-slate-400 mb-3 text-sm leading-relaxed border-b border-slate-800 pb-3">
            <span className="text-orange-500 mr-2">&gt;[HECHO]:</span> Descarga y captura de los 125 GB de bases de datos internas, incluyendo los historiales de pago en tránsito o reposo.
          </div>
          <div className="text-slate-300 text-sm">
            <span className="text-emerald-500 mr-2">&gt;[ANÁLISIS]:</span> La ley castiga a quien intercepte o interfiera transmisiones de datos. Al copiar registros de pagos (datos no públicos), vulneró la confidencialidad en origen.
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 border-l-4 border-l-yellow-500 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-xl text-white uppercase">Receptación de Datos</h3>
            <span className="bg-yellow-950 text-yellow-400 border border-yellow-800 px-2 py-1 text-xs rounded">Art. 6°, Ley 21.459</span>
          </div>
          <div className="text-slate-400 mb-3 text-sm leading-relaxed border-b border-slate-800 pb-3">
            <span className="text-yellow-500 mr-2">&gt;[HECHO]:</span> Empaquetado de la información robada en torrent y publicación masiva mediante enlace magnético en 4chan.
          </div>
          <div className="text-slate-300 text-sm">
            <span className="text-emerald-500 mr-2">&gt;[ANÁLISIS]:</span> Sanciona explícitamente a quien <em>"conociendo su origen ilícito, comercialice, transfiera o distribuya datos"</em>. La publicación consciente en foro público configura el tipo penal.
          </div>
        </div>
      </div>
    </div>
  );
}

function Comparacion() {
  return (
    <div className="space-y-6 animate-fade-in text-slate-300">
      <div className="flex items-center gap-3 border-b border-purple-800/50 pb-4">
        <Columns className="text-indigo-400 w-8 h-8" />
        <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Contraste de Normativas</h2>
      </div>
      <p className="text-slate-400 mb-4 text-lg">
        La siguiente tabla contrasta cómo diferentes normativas abordan la negligencia corporativa, demostrando las brechas de la legislación chilena:
      </p>
      <div className="overflow-x-auto rounded-lg border border-slate-700 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        <table className="w-full text-left border-collapse bg-slate-900">
          <thead>
            <tr className="bg-slate-950 text-white border-b border-slate-700">
              <th className="p-4 font-semibold text-purple-400 uppercase text-xs tracking-wider border-r border-slate-800">Eje de Análisis</th>
              <th className="p-4 font-semibold uppercase text-xs tracking-wider border-r border-slate-800">Ley 19.628 (Chile)</th>
              <th className="p-4 font-semibold uppercase text-xs tracking-wider border-r border-slate-800">GDPR (Europa)</th>
              <th className="p-4 font-semibold text-indigo-400 uppercase text-xs tracking-wider">PCI-DSS (Pagos)</th>
              <th className="p-4 font-semibold text-sky-400 uppercase text-xs tracking-wider">ISO 27001 (SGSI)</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-slate-800 hover:bg-slate-800/50 transition">
              <td className="p-4 font-bold text-slate-300 border-r border-slate-800">Alcance Jurisdiccional</td>
              <td className="p-4 text-slate-400 border-r border-slate-800">Territorial. Aplica a bases de datos alojadas en Chile.</td>
              <td className="p-4 text-slate-400 border-r border-slate-800">Extraterritorial. Aplica si el usuario es ciudadano de la UE.</td>
              <td className="p-4 text-slate-400 bg-indigo-950/10">Específico por contrato para procesadores de tarjetas.</td>
              <td className="p-4 text-slate-400 bg-sky-950/10">Global. Estándar certificable exigido corporativamente.</td>
            </tr>
            <tr className="border-b border-slate-800 hover:bg-slate-800/50 transition">
              <td className="p-4 font-bold text-slate-300 border-r border-slate-800">Notificación Brechas</td>
              <td className="p-4 text-red-400 font-medium border-r border-slate-800">No obligatoria en ley actual. Deja usuarios en indefensión.</td>
              <td className="p-4 text-emerald-400 font-medium border-r border-slate-800">Plazo máximo 72 horas para notificar a la autoridad.</td>
              <td className="p-4 text-emerald-400 font-medium bg-indigo-950/10">Alerta inmediata a bancos adquirentes y marcas.</td>
              <td className="p-4 text-emerald-400 font-medium bg-sky-950/10">Obliga a tener un proceso formal de reporte de incidentes.</td>
            </tr>
            <tr className="border-b border-slate-800 hover:bg-slate-800/50 transition">
              <td className="p-4 font-bold text-slate-300 border-r border-slate-800">Seguridad Exigida</td>
              <td className="p-4 text-slate-400 border-r border-slate-800">Menciona el "debido cuidado", sin controles criptográficos.</td>
              <td className="p-4 text-slate-400 border-r border-slate-800">Medidas acordes al riesgo (cifrado, seudonimización).</td>
              <td className="p-4 text-slate-400 bg-indigo-950/10">Micro-segmentación, Pentesting, MFA obligatorio.</td>
              <td className="p-4 text-slate-400 bg-sky-950/10">Exige un Sistema de Gestión (SGSI) y análisis de riesgos continuo.</td>
            </tr>

            <tr className="border-b border-slate-800 hover:bg-slate-800/50 transition">
              <td className="p-4 font-bold text-slate-300 border-r border-slate-800">Sanciones y Multas</td>
              <td className="p-4 text-slate-400 border-r border-slate-800">Multas económicas moderadas (en UTM) e indemnización por daños.</td>
              <td className="p-4 text-slate-400 border-r border-slate-800">Multas severas: hasta 20 millones de euros o 4% de la facturación global.</td>
              <td className="p-4 text-slate-400 bg-indigo-950/10">Multas mensuales (hasta $100k USD) y revocación para procesar tarjetas.</td>
              <td className="p-4 text-slate-400 bg-sky-950/10">Pérdida de certificación, fuga de clientes e impacto reputacional.</td>
            </tr>

            <tr className="hover:bg-slate-800/50 transition bg-purple-900/10">
              <td className="p-4 font-bold text-purple-300 border-r border-slate-800">Aplicabilidad Twitch</td>
              <td className="p-4 text-slate-300 border-r border-slate-800">&gt;Art. 11 y 23 (Ley 19.628):
                Infracción directa al deber de cuidado. Obligación legal de indemnizar a los creadores chilenos por exponer su historial de ganancias (dato patrimonial), dejándolos vulnerables a perfilamiento económico y extorsiones.</td>
              <td className="p-4 text-slate-300 border-r border-slate-800">&gt;Art. 32 y 83 (GDPR):
                Sanción por violar el principio de resiliencia de los sistemas. La plataforma arriesga multas punitivas de hasta el 4% de su facturación global anual por la exposición sistémica de usuarios europeos.</td>
              <td className="p-4 text-slate-300 bg-indigo-950/10">&gt; Requisito 1 (PCI-DSS):
                Falla crítica de arquitectura. La falta de micro-segmentación permitió que el entorno de tarjetas (CDE) estuviera en la misma red vulnerada que el código fuente, arriesgando la revocación para procesar pagos.</td>
              <td className="p-4 text-slate-300 bg-sky-950/10">&gt; Control A.14: Ausencia de desarrollo seguro. Exponer el código fuente y las ganancias evidencia fallas graves en la protección de los sistemas.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Responsabilidades() {
  return (
    <div className="space-y-6 animate-fade-in text-slate-300">
      <div className="flex items-center gap-3 border-b border-purple-800/50 pb-4">
        <Users className="text-orange-500 w-8 h-8" />
        <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Actores y Responsabilidades</h2>
      </div>
      <p className="text-slate-400 text-lg mb-2">
        Identificación de perfiles involucrados y atribución jurídica:
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

        {/* Atacante */}
        <div className="bg-slate-900 rounded-lg border border-red-900 shadow-lg flex flex-col overflow-hidden relative">
          <div className="absolute top-2 right-2"><Fingerprint className="text-red-500/20 w-12 h-12" /></div>
          <div className="bg-red-950 p-4 border-b border-red-800">
            <h3 className="text-red-400 font-bold text-lg text-center uppercase tracking-widest">1. El Atacante</h3>
            <p className="text-red-200/50 text-xs text-center mt-1 font-mono">ID: HACKER_ANON</p>
          </div>
          <div className="p-5 space-y-4 flex-1 z-10 text-sm">
            <div>
              <strong className="text-red-400 block mb-1 font-mono border-b border-slate-800">&gt;&gt; PENAL</strong>
              <p className="text-slate-400">Principal imputado. Penas corporales por Ley 21.459 (Acceso a AWS, robo y receptación 125GB).</p>
            </div>
            <div>
              <strong className="text-orange-400 block mb-1 font-mono border-b border-slate-800">&gt;&gt; CIVIL</strong>
              <p className="text-slate-400">Responsabilidad extracontractual (Art. 2314/2329 C.C.). Obligado a reparar daño moral/patrimonial.</p>
            </div>
            <div>
              <strong className="text-slate-500 block mb-1 font-mono border-b border-slate-800">&gt;&gt; ADMIN</strong>
              <p className="text-slate-500 italic">Inexistente. Actuar doloso recae en penal/civil.</p>
            </div>
          </div>
        </div>

        {/* Twitch */}
        <div className="bg-slate-900 rounded-lg border border-purple-900 shadow-lg flex flex-col overflow-hidden relative">
          <div className="absolute top-2 right-2"><Terminal className="text-purple-500/20 w-12 h-12" /></div>
          <div className="bg-purple-950 p-4 border-b border-purple-800">
            <h3 className="text-purple-400 font-bold text-lg text-center uppercase tracking-widest">2. Twitch</h3>
            <p className="text-purple-200/50 text-xs text-center mt-1 font-mono">ID: CUSTODIO_DATOS</p>
          </div>
          <div className="p-5 space-y-4 flex-1 z-10 text-sm">
            <div>
              <strong className="text-slate-500 block mb-1 font-mono border-b border-slate-800">&gt;&gt; PENAL</strong>
              <p className="text-slate-500 italic">Inexistente (Ley 20.393). Es la víctima del sabotaje.</p>
            </div>
            <div>
              <strong className="text-orange-400 block mb-1 font-mono border-b border-slate-800">&gt;&gt; CIVIL</strong>
              <p className="text-slate-400">Negligencia. <strong>Art. 23 Ley 19.628</strong> obliga a indemnizar daño por exponer pagos de creadores.</p>
            </div>
            <div>
              <strong className="text-purple-400 block mb-1 font-mono border-b border-slate-800">&gt;&gt; ADMIN</strong>
              <p className="text-slate-400">Infracción directa al <strong>Art. 11 Ley 19.628</strong> (falla cuidado). Fiscalización por autoridades.</p>
            </div>
          </div>
        </div>

        {/* Amazon */}
        <div className="bg-slate-900 rounded-lg border border-orange-900 shadow-lg flex flex-col overflow-hidden relative">
          <div className="absolute top-2 right-2"><ServerCrash className="text-orange-500/20 w-12 h-12" /></div>
          <div className="bg-orange-950 p-4 border-b border-orange-800">
            <h3 className="text-orange-400 font-bold text-lg text-center uppercase tracking-widest">3. Amazon</h3>
            <p className="text-orange-200/50 text-xs text-center mt-1 font-mono">ID: MATRIZ_CLOUD</p>
          </div>
          <div className="p-5 space-y-4 flex-1 z-10 text-sm">
            <div>
              <strong className="text-slate-500 block mb-1 font-mono border-b border-slate-800">&gt;&gt; PENAL</strong>
              <p className="text-slate-500 italic">Inexistente, por mismos motivos que su filial Twitch.</p>
            </div>
            <div>
              <strong className="text-orange-400 block mb-1 font-mono border-b border-slate-800">&gt;&gt; CIVIL</strong>
              <p className="text-slate-400">Posible responsabilidad solidaria (Art. 2320 C.C.) si se acredita arquitectura AWS defectuosa para la filial.</p>
            </div>
            <div>
              <strong className="text-sky-400 block mb-1 font-mono border-b border-slate-800">&gt;&gt; ADMIN</strong>
              <p className="text-slate-400">Agencias (GDPR) escalan multas sobre ingresos globales de la matriz si hay injerencia corporativa.</p>
            </div>
          </div>
        </div>



        {/* 4chan */}
        <div className="bg-slate-900 rounded-lg border border-teal-900 shadow-lg flex flex-col overflow-hidden relative hover:border-teal-500/50 transition-colors">
          <div className="absolute top-2 right-2"><MessageSquare className="text-teal-500/20 w-12 h-12" /></div>
          <div className="bg-teal-950 p-4 border-b border-teal-800">
            <h3 className="text-teal-400 font-bold text-lg text-center uppercase tracking-widest">4. 4chan (Foro)</h3>
            <p className="text-teal-200/50 text-xs text-center mt-1 font-mono">ID: NODO_DIFUSION</p>
          </div>
          <div className="p-5 space-y-4 flex-1 z-10 text-sm">
            <div>
              <strong className="text-slate-500 block mb-1 font-mono border-b border-slate-800">&gt;&gt; PENAL</strong>
              <p className="text-slate-400">Protegido como intermediario (Safe Harbor). Solo arriesgaría complicidad (Art. 6 Ley 21.459) si hay una negativa dolosa a eliminar el enlace malicioso tras una orden.</p>
            </div>
            <div>
              <strong className="text-orange-400 block mb-1 font-mono border-b border-slate-800">&gt;&gt; CIVIL</strong>
              <p className="text-slate-400">Responsabilidad por omisión. Debe responder e indemnizar si ignora los requerimientos formales de cese de distribución (Notice and Takedown).</p>
            </div>
            <div>
              <strong className="text-teal-400 block mb-1 font-mono border-b border-slate-800">&gt;&gt; ADMIN</strong>
              <p className="text-slate-400">Posible bloqueo de DNS a nivel de Proveedores de Internet (ISP) ordenado por la autoridad de telecomunicaciones para mitigar el daño.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function DatosPersonales() {
  return (
    <div className="space-y-6 animate-fade-in text-slate-300">
      <div className="flex items-center gap-3 border-b border-purple-800/50 pb-4">
        <Database className="text-teal-400 w-8 h-8" />
        <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Tratamiento de Datos</h2>
      </div>

      <p className="text-slate-400 text-lg mb-6">
        La legislación chilena (Ley 19.628) distingue la naturaleza jurídica de los datos expuestos:
      </p>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1 bg-slate-900 p-6 rounded-lg border border-slate-800 border-t-4 border-t-teal-500 shadow-lg">
          <h3 className="font-bold text-teal-400 mb-2 text-xl font-mono uppercase">1. Personales (Económicos)</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Nombres de usuario, contraseñas y <strong>el historial detallado de pagos y ganancias brutas</strong> desde 2019. Bajo ley chilena, el dato financiero permite perfilar capacidad adquisitiva, requiriendo estricta seguridad. Su exposición facilita fraude y extorsión.
          </p>
        </div>
        <div className="flex-1 bg-slate-900 p-6 rounded-lg border border-slate-800 border-t-4 border-t-rose-500 shadow-lg">
          <h3 className="font-bold text-rose-400 mb-2 text-xl font-mono uppercase">2. Sensibles (Inferencia)</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Historiales de visualización y registros de chat. Mediante <em>Big Data</em>, cruzar suscripciones/donaciones permite inferir <strong>orientación sexual, ideología política o estado de salud</strong>, transformando estos registros en datos jurídicamente sensibles.
          </p>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-700 p-6 rounded-lg shadow-lg">
        <h3 className="font-bold text-xl text-white mb-4 border-b border-slate-700 pb-2 flex items-center gap-2">
          <LockOpen className="w-5 h-5 text-purple-400" /> Vulneración Derechos ARCO
        </h3>
        <p className="text-slate-400 mb-5 leading-relaxed">
          Ante esta negligencia en el resguardo de la información, los usuarios están facultados para ejercer sus Derechos ARCO amparados en el <strong className="text-purple-300">Artículo 12 de la Ley 19.628</strong>, el cual establece textualmente que: <br /><br />
          <em className="pl-4 border-l-4 border-purple-500 block text-purple-200 bg-purple-900/20 py-2 rounded-r italic">"Toda persona tiene derecho a exigir a quien se dedique al tratamiento de datos personales, información sobre los datos relativos a su persona, su procedencia y destinatario, el propósito del almacenamiento..."</em><br />
          Esto obliga a la plataforma a responder a las siguientes vulneraciones:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-slate-950 p-5 rounded border border-slate-800 hover:border-purple-500/50 transition">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-purple-900 text-purple-200 w-8 h-8 rounded flex items-center justify-center font-bold font-mono">A</span>
              <strong className="text-lg text-slate-200">Derecho de Acceso</strong>
            </div>
            <p className="text-sm text-slate-400">Exigir a Twitch que informe qué datos específicos formaron parte del volcado de 125 GB y cómo se adquirieron.</p>
          </div>

          <div className="bg-slate-950 p-5 rounded border border-slate-800 hover:border-purple-500/50 transition">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-purple-900 text-purple-200 w-8 h-8 rounded flex items-center justify-center font-bold font-mono">R</span>
              <strong className="text-lg text-slate-200">Derecho de Rectificación</strong>
            </div>
            <p className="text-sm text-slate-400">Si la base robada revela información financiera errónea o desactualizada, demandar su corrección inmediata.</p>
          </div>

          <div className="bg-slate-950 p-5 rounded border border-slate-800 hover:border-purple-500/50 transition">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-purple-900 text-purple-200 w-8 h-8 rounded flex items-center justify-center font-bold font-mono">C</span>
              <strong className="text-lg text-slate-200">Derecho de Cancelación</strong>
            </div>
            <p className="text-sm text-slate-400">Derecho irrenunciable a revocar consentimiento y exigir eliminación permanente de cuenta y tarjetas bancarias.</p>
          </div>

          <div className="bg-slate-950 p-5 rounded border border-slate-800 hover:border-purple-500/50 transition">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-purple-900 text-purple-200 w-8 h-8 rounded flex items-center justify-center font-bold font-mono">O</span>
              <strong className="text-lg text-slate-200">Derecho de Oposición</strong>
            </div>
            <p className="text-sm text-slate-400">Negarse a que Twitch siga tratando su información para fines estadísticos o algoritmos de recomendación.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Conclusiones() {
  return (
    <div className="space-y-6 animate-fade-in text-slate-300">
      <div className="flex items-center gap-3 border-b border-purple-800/50 pb-4">
        <ShieldCheck className="text-green-500 w-8 h-8" />
        <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Conclusiones y Mitigación</h2>
      </div>

      <div className="bg-slate-900 p-7 rounded-xl border border-slate-700 shadow-lg">
        <h3 className="font-bold text-xl text-emerald-400 mb-4 font-mono uppercase">&gt;&gt; Protocolos_Zero_Trust.sh</h3>
        <p className="text-slate-400 mb-5">
          Para prevenir vulnerabilidades como el error de configuración AWS en Twitch, se recomiendan controles arquitectónicos estrictos:
        </p>
        <ul className="space-y-4 mb-8">
          <li className="flex gap-3 items-start bg-slate-950 p-4 rounded border border-emerald-900/50">
            <Terminal className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-200">Infraestructura como Código (IaC) Auditada:</strong>
              <p className="text-slate-400 text-sm mt-1">Cambios definidos por código y sometidos a pruebas automatizadas antes del despliegue en producción.</p>
            </div>
          </li>
          <li className="flex gap-3 items-start bg-slate-950 p-4 rounded border border-emerald-900/50">
            <Terminal className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-200">Micro-segmentación Estricta:</strong>
              <p className="text-slate-400 text-sm mt-1">Separar radicalmente entornos de desarrollo (código fuente) de bases de producción (finanzas). Prevenir movimiento lateral.</p>
            </div>
          </li>
          <li className="flex gap-3 items-start bg-slate-950 p-4 rounded border border-emerald-900/50">
            <Terminal className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-200">Respuesta a Incidentes (IRP) Ágil:</strong>
              <p className="text-slate-400 text-sm mt-1">Protocolos de contención y notificación bajo estándar GDPR (72 horas) para alertar rotación de credenciales a usuarios.</p>
            </div>
          </li>
        </ul>

        <div className="bg-black p-6 rounded-lg border border-slate-800 shadow-[inset_0_0_20px_rgba(0,0,0,1)]">
          <h3 className="font-bold text-purple-400 mb-3 text-lg flex items-center gap-2">
            <AlertOctagon className="w-5 h-5" /> Reflexión Legal
          </h3>
          <p className="text-slate-400 italic leading-relaxed text-sm">
            "El caso de Twitch reafirma que la ciberseguridad trasciende lo tecnológico para ser una obligación legal. La filtración salarial vulnera la seguridad digital de los creadores. <br /><br />
            Al analizarlo desde el contexto nacional, si bien la <strong className="text-white">Ley 21.459</strong> otorga herramientas modernas para perseguir y penalizar el robo y receptación de los 125 GB, existe un vacío en la <strong className="text-white">Ley 19.628</strong>: la falta de obligatoriedad de notificar incidentes. Una infraestructura resiliente debe acompañarse de un marco proactivo que obligue la transparencia frente a los usuarios."
          </p>
        </div>
      </div>
    </div>
  );
}

// NUEVO COMPONENTE: Referencias y Bibliografía
function Referencias() {
  return (
    <div className="space-y-6 animate-fade-in text-slate-300">
      <div className="flex items-center gap-3 border-b border-purple-800/50 pb-4">
        <Bookmark className="text-cyan-500 w-8 h-8" />
        <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Fuentes y Referencias</h2>
      </div>
      <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 shadow-lg">
        <p className="text-slate-400 mb-4 text-sm font-mono">&gt; Repositorio de normativas consultadas para el análisis de este caso:</p>
        <ul className="space-y-4 text-sm text-slate-300">
          <li className="flex gap-3 items-start">
            <span className="text-cyan-500 font-bold">&gt;</span>
            <div>
              <strong className="text-white">Biblioteca del Congreso Nacional de Chile (BCN).</strong>
              <p className="text-slate-500">Ley 21.459: Establece normas sobre delitos informáticos, deroga la ley N° 19.223 y modifica otros cuerpos legales.</p>
            </div>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-cyan-500 font-bold">&gt;</span>
            <div>
              <strong className="text-white">Biblioteca del Congreso Nacional de Chile (BCN).</strong>
              <p className="text-slate-500">Ley 19.628: Sobre protección de la vida privada (Derechos ARCO).</p>
            </div>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-cyan-500 font-bold">&gt;</span>
            <div>
              <strong className="text-white">Diario Oficial de la Unión Europea.</strong>
              <p className="text-slate-500">Reglamento General de Protección de Datos (GDPR).</p>
            </div>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-cyan-500 font-bold">&gt;</span>
            <div>
              <strong className="text-white">PCI Security Standards Council.</strong>
              <p className="text-slate-500">Payment Card Industry Data Security Standard (PCI DSS).</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Prompts() {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  return (
    <div className="space-y-6 animate-fade-in text-slate-300">
      <div className="flex items-center gap-3 border-b border-purple-800/50 pb-4">
        <MessageSquare className="text-pink-500 w-8 h-8" />
        <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Bitácora de IA</h2>
      </div>

      <div className="space-y-6">

        {/* Declaración de Gemini como Agente */}
        <div className="bg-black p-6 rounded-lg border border-pink-900 shadow-[inset_0_0_20px_rgba(236,72,153,0.15)]">
          <h3 className="font-bold text-pink-400 mb-3 text-lg font-mono">&gt; Sys.Role(Gemini_Dev_Agent)</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            Para el desarrollo de esta evaluación, <strong className="text-white">Google Gemini </strong>se integró a lo largo de múltiples sesiones como un <strong className="text-white">Agente de Desarrollo (Dev Agent)</strong> interactivo.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            El Agente operó de manera integral cruzando dominios: partió investigando y aplicando el marco legal chileno (Leyes 21.459 y 19.628) sobre el caso internacional de Twitch. Posteriormente, evolucionó para estructurar la arquitectura local en Vite, inyectar dependencias, generar la maquetación en React + Tailwind CSS, integrar hooks de estado (reloj en vivo, dark mode), y depurar errores de sintaxis y despliegue (CI/CD) directo a Vercel.
          </p>
        </div>

        {/* Menú Desplegable de Prompts */}
        <div className="bg-slate-900 p-6 rounded-lg border border-purple-900/30 shadow-lg transition-all duration-300">
          <button
            onClick={() => setIsHistoryOpen(!isHistoryOpen)}
            className="w-full flex items-center justify-between cursor-pointer group outline-none"
          >
            <h3 className="font-bold text-lg text-purple-400 font-mono group-hover:text-purple-300 transition-colors">
              &gt; Historial Completo de Prompts
            </h3>
            <span className="text-purple-400 font-mono bg-purple-950 px-2 py-1 rounded text-xs border border-purple-800">
              {isHistoryOpen ? '[-] CONTRAER' : '[+] EXPANDIR'}
            </span>
          </button>

          {isHistoryOpen && (
            <div className="mt-6 space-y-8 animate-fade-in border-t border-slate-800 pt-6">

              {/* DIA 14.05 */}
              <div>
                <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                  <span className="bg-pink-900 text-pink-200 px-2 py-1 rounded text-xs font-mono">14-MAY</span>
                  Investigación Legal y Setup Base
                </h4>
                <div className="space-y-3 pl-2 border-l-2 border-slate-700">
                  <div className="bg-black/50 p-3 rounded border border-slate-800 text-sm text-slate-400 font-mono text-xs leading-relaxed">
                    <span className="text-pink-500 font-bold block mb-1">1.</span>
                    "Primero que todo tengo que definir mi tema, necesito que sea sobre delitos digitales... Independientemente del país donde ocurrió el caso, el análisis legal debe aplicar la legislación chilena cuando la rúbrica así lo requiere..."
                  </div>
                  <div className="bg-black/50 p-3 rounded border border-slate-800 text-sm text-slate-400 font-mono text-xs">
                    <span className="text-pink-500 font-bold block mb-1">2.</span>
                    "Dame informacion sobre el caso de filtracion de datos de twitch en el año 2021 de los creadores de contenido."
                  </div>
                  <div className="bg-black/50 p-3 rounded border border-slate-800 text-sm text-slate-400 font-mono text-xs">
                    <span className="text-pink-500 font-bold block mb-1">3.</span>
                    "Ahora completa este otro archivo también en md. que debe llevar lo siguiente sobre el mismo caso... Leyes y regulaciones aplicables al caso, nacionales e internacionales (mínimo 4 normas justificadas)."
                  </div>
                  <div className="bg-black/50 p-3 rounded border border-slate-800 text-sm text-slate-400 font-mono text-xs">
                    <span className="text-pink-500 font-bold block mb-1">4.</span>
                    "Necesito realizar una tipificacion de los delitos segun la Ley 21.459, dame por lo menos 4 de estos."
                  </div>
                  <div className="bg-black/50 p-3 rounded border border-slate-800 text-sm text-slate-400 font-mono text-xs">
                    <span className="text-pink-500 font-bold block mb-1">5.</span>
                    "Ahora necesito seguir con el md. de comparacion. El cual debe incluir lo siguiente Tabla comparativa de marcos regulatorios por industria (mínimo 3 marcos y 3 ejes)."
                  </div>
                  <div className="bg-black/50 p-3 rounded border border-slate-800 text-sm text-slate-400 font-mono text-xs">
                    <span className="text-pink-500 font-bold block mb-1">6.</span>
                    "Y ahora debo realizar el quinto md. el cual debe contemplar: Actores identificados y sus responsabilidades penales, civiles y administrativas, con cita de norma en relacion al caso de Filtracion de datos de Twitch."
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded border border-blue-900/50 text-sm text-blue-200 font-mono text-xs">
                    <span className="text-blue-400 font-bold block mb-1">7.</span>
                    "Te cuento que en relacion con todo este proyecto debo realizar una aplicacion en react + vite, que fue el primer proyecto que levantamos. Quiero que con toda la informacion recaudada realices un tipo informe interactivo en una pagina html, y dame el codigo para ponerlo en mi proyecto"
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded border border-blue-900/50 text-sm text-blue-200 font-mono text-xs">
                    <span className="text-blue-400 font-bold block mb-1">8.</span>
                    "Mira tengo mis archivos del proyecto con vite, me puedes señalar exactamente donde poner este codigo para que funcione?"
                  </div>
                </div>
              </div>

              {/* DIA 24.05 */}
              <div>
                <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                  <span className="bg-pink-900 text-pink-200 px-2 py-1 rounded text-xs font-mono">24-MAY</span>
                  Refinamiento, UI y Despliegue
                </h4>
                <div className="space-y-3 pl-2 border-l-2 border-slate-700">
                  <div className="bg-orange-950/30 p-3 rounded border border-orange-900/50 text-sm text-orange-200 font-mono text-xs">
                    <span className="text-orange-500 font-bold block mb-1">9.</span>
                    "oye mira mi proyecto me gusto bastante pero me gustaria que quedara mas completo y tuviera mas enfasis en el contenido como tal, siendo que tiene muy poca informacion sobre el tema"
                  </div>
                  <div className="bg-black/50 p-3 rounded border border-slate-800 text-sm text-slate-400 font-mono text-xs">
                    <span className="text-pink-500 font-bold block mb-1">10.</span>
                    "Ahora me gustaria que mi profesor pudiera ver los prompts que utilice desde la misma aplicacion, podemos agregarlo en alguna parte?"
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded border border-blue-900/50 text-sm text-blue-200 font-mono text-xs">
                    <span className="text-blue-400 font-bold block mb-1">11.</span>
                    "listo, ahora puedes ayudarme a subirlo a vercel?"
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded border border-blue-900/50 text-sm text-blue-200 font-mono text-xs leading-relaxed">
                    <span className="text-blue-400 font-bold block mb-1">12.</span>
                    "y ahora ya tengo el proyecto completo listo, ya en vercel y todo. Pero me gustaria hacer cambio visual, para que sea mas atractivo, y que tenga una aura como de peligro dado la filtracion y todo lo que es la filtracion de datos etc, tambien el tema de streamers y twitch y amazon, como podemos hacerlo que tenga mas visualizacion mas llamativa."
                  </div>
                </div>
              </div>

              {/* DIA 26.05 */}
              <div>
                <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                  <span className="bg-pink-900 text-pink-200 px-2 py-1 rounded text-xs font-mono">26-MAY</span>
                  Features Técnicos (Hooks y Navegador)
                </h4>
                <div className="space-y-3 pl-2 border-l-2 border-slate-700">
                  <div className="bg-slate-800/80 p-3 rounded border border-blue-900/50 text-sm text-blue-200 font-mono text-xs">
                    <span className="text-blue-400 font-bold block mb-1">13.</span>
                    "Me gustaria agregar un boton para poder pasar a pdf la app que acabamos de realizar, ayudame creando uno en la parte superior del menu"
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded border border-blue-900/50 text-sm text-blue-200 font-mono text-xs">
                    <span className="text-blue-400 font-bold block mb-1">14.</span>
                    "Ahora tambien le quiero agregar la hora en tiempo real"
                  </div>
                </div>
              </div>

              {/* DIA 28.05 */}
              <div>
                <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                  <span className="bg-pink-900 text-pink-200 px-2 py-1 rounded text-xs font-mono">28-MAY</span>
                  Interactividad y Referencias
                </h4>
                <div className="space-y-3 pl-2 border-l-2 border-slate-700">
                  <div className="bg-slate-800/80 p-3 rounded border border-blue-900/50 text-sm text-blue-200 font-mono text-xs leading-relaxed">
                    <span className="text-blue-400 font-bold block mb-1">15.</span>
                    "Necesito realizar varias modificaciones a mi proyecto, dentro de ellas necesito agregar un boton para cambiar el modo oscuro a modo claro de mi pagina, y tambien necesito agregar al finan un enlace para que la persona que vea esto, llegue a mi github que es: https://github.com/Michprogram"
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Sección de Intervención Humana (Correcciones) */}
        <div className="bg-slate-900 p-6 rounded-lg border border-orange-900/30 shadow-lg">
          <h3 className="font-bold text-lg text-orange-400 mb-4 border-b border-slate-700 pb-2 font-mono">&gt; Intervención Humana y Correcciones</h3>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex gap-3">
              <AlertOctagon className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">Exigencia de Profundidad Legal (24 de mayo):</strong> El código inicial de React entregado por el Agente contenía un resumen muy breve. Fue necesario realizar el Prompt 9 para exigir la inyección del análisis legal exhaustivo (citando expresamente las normativas e identificando a Amazon como 3er actor civil).
              </span>
            </li>
            <li className="flex gap-3">
              <AlertOctagon className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">Corrección Manual de Sintaxis (28 de mayo):</strong> Al integrar las últimas mejoras en vivo (reloj y botón de modo claro), el Agente duplicó el bloque principal, lo cual rompió el árbol de dependencias. Se debió intervenir manualmente borrando el bloque duplicado y corrigiendo el cierre de llaves.
              </span>
            </li>
          </ul>
        </div>

        {/* Reflexión Final */}
        <div className="bg-black p-6 rounded-lg border border-purple-900 shadow-[inset_0_0_20px_rgba(126,34,206,0.15)]">
          <h3 className="font-bold text-purple-400 mb-3 text-lg font-mono">&gt; Sys.Reflexion(Chatbot_vs_Agente)</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            Utilizar a Gemini integralmente como un <strong className="text-white">Agente de Desarrollo e Investigación</strong> fue clave desde la primera etapa para aterrizar conceptos legales, estructurar la información y simular el escenario hipotético de aplicar la legislación chilena (Ley 21.459 y 19.628) al caso de Twitch.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            Al encomendarle la generación de la aplicación web, el Agente estructuró rápidamente el entorno con React y Tailwind CSS. Si bien al inicio la IA tendió a resumir los textos legales para priorizar el diseño visual, esto demuestra la verdadera dinámica de trabajo: la IA agiliza enormemente la construcción técnica, pero el criterio analítico, la profundidad legal y las directrices del proyecto dependen enteramente del desarrollador humano que orquesta y guía a la herramienta.
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
  const [sysTime, setSysTime] = useState(''); // ESTADO DEL RELOJ
  const [isDarkMode, setIsDarkMode] = useState(true);

  // EFECTO DEL RELOJ
  useEffect(() => {
    const interval = setInterval(() => {
      setSysTime(new Date().toLocaleTimeString('es-CL', { hour12: false }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const menuItems = [
    { id: 'resumen', label: 'Reporte Incidente', icon: Terminal },
    { id: 'marco', label: 'Marco Normativo', icon: BookOpen },
    { id: 'delitos', label: 'Delitos (Ley 21.459)', icon: Skull },
    { id: 'comparacion', label: 'Comparación', icon: Columns },
    { id: 'responsabilidades', label: 'Actores Legales', icon: Users },
    { id: 'datos', label: 'Datos (Ley 19.628)', icon: Database },
    { id: 'conclusiones', label: 'Mitigación', icon: ShieldCheck },
    { id: 'referencias', label: 'Bibliografía', icon: Bookmark }, // NUEVO MENU
    { id: 'prompts', label: 'Bitácora IA', icon: MessageSquare },
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
      case 'referencias': return <Referencias />; // NUEVO RENDER
      case 'prompts': return <Prompts />;
      default: return <Resumen />;
    }
  };

  return (
    <div className={`min-h-screen bg-slate-950 flex flex-col md:flex-row font-sans selection:bg-purple-500/30 transition-all duration-500 ${!isDarkMode ? 'invert hue-rotate-180' : ''}`}>

      {/* Botón menú móvil */}
      <div className="md:hidden bg-black border-b border-purple-900/50 text-white p-4 flex justify-between items-center shadow-md z-20">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-purple-500" />
          <span className="font-bold tracking-widest text-sm uppercase">Twitch_Leak.sys</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-purple-400">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Menú Lateral (Sidebar) */}
      <aside className={`
        ${isMobileMenuOpen ? 'block' : 'hidden'} 
        md:flex flex-col w-full md:w-72 bg-black border-r border-slate-800 text-slate-300 flex-shrink-0 shadow-[4px_0_24px_rgba(0,0,0,0.5)]
        absolute md:relative z-10 min-h-screen
      `}>
        <div className="p-7 hidden md:block border-b border-slate-800 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 opacity-20">
            <ServerCrash className="w-32 h-32 text-purple-600" />
          </div>
          <div className="flex items-center gap-3 text-white mb-3 relative z-10">
            <ShieldCheck className="text-purple-500 w-8 h-8" />
            <h1 className="text-lg font-bold leading-tight uppercase tracking-wider">Ciberseguridad<br /><span className="text-purple-400">Legal</span></h1>
          </div>

          {/* BOTONES DE ACCIÓN (TEMA E IMPRESORA) */}
          <div className="flex items-center justify-between mt-2 relative z-10">
            <p className="text-xs text-slate-500 tracking-widest uppercase font-semibold">Expediente T-2021</p>
            <div className="flex gap-2">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="text-slate-500 hover:text-yellow-400 transition-colors bg-slate-900 p-1.5 rounded border border-slate-800 hover:border-yellow-500/50 flex items-center justify-center"
                title="Cambiar Tema"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={() => window.print()}
                className="text-slate-500 hover:text-purple-400 transition-colors bg-slate-900 p-1.5 rounded border border-slate-800 hover:border-purple-500/50 flex items-center justify-center"
                title="Exportar a PDF / Imprimir"
              >
                <Printer className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RELOJ EN VIVO */}
          <div className="mt-4 flex items-center justify-between relative z-10">
            <div className="inline-flex items-center gap-2 bg-red-950/50 border border-red-900 px-2 py-1 rounded">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              <p className="text-[10px] font-mono text-red-400">STATUS: CLASIFICADO</p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 px-2 py-1 rounded">
              <p className="text-[10px] font-mono text-emerald-400/80">{sysTime} CHL</p>
            </div>
          </div>
        </div>

        <nav className="mt-4 md:mt-6 flex flex-col gap-2 px-4 pb-8 flex-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            const isPromptsTab = item.id === 'prompts';

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`
                  flex items-center gap-3 px-4 py-3.5 rounded text-left transition-all duration-300 font-medium tracking-wide uppercase text-xs
                  ${isActive && !isPromptsTab ? 'bg-gradient-to-r from-purple-900/40 to-transparent text-purple-300 border-l-2 border-purple-500 shadow-[inset_4px_0_10px_rgba(168,85,247,0.1)]' : ''}
                  ${isActive && isPromptsTab ? 'bg-gradient-to-r from-pink-900/40 to-transparent text-pink-300 border-l-2 border-pink-500 shadow-[inset_4px_0_10px_rgba(236,72,153,0.1)]' : ''}
                  ${!isActive ? 'text-slate-500 hover:bg-slate-900 hover:text-slate-300 border-l-2 border-transparent hover:border-slate-700' : ''}
                  ${!isActive && isPromptsTab ? 'mt-4 border-t border-slate-800 pt-6' : ''}
                `}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : (isPromptsTab ? 'text-pink-700' : 'text-slate-600')}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Contenido Principal */}
      <main className="flex-1 bg-slate-950 p-6 md:p-10 lg:p-12 h-screen overflow-y-auto relative bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/10 via-slate-950 to-slate-950">
        <div className="max-w-4xl mx-auto">
          {renderContent()}
        </div>

        {/* Footer */}
        <footer className="max-w-4xl mx-auto mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-mono tracking-widest uppercase">
          <span>Agente: Michele Barriga</span>

          <a
            href="https://github.com/Michprogram"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-purple-400 transition-colors bg-slate-900/50 px-3 py-1.5 rounded border border-slate-800 hover:border-purple-500/50"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.302 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.73.084-.73 1.205.084 1.84 1.238 1.84 1.238 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.76-1.605-2.665-.303-5.467-1.335-5.467-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.301 1.23a11.52 11.52 0 013.003-.403c1.02.005 2.045.138 3.003.403 2.291-1.553 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.236 1.911 1.236 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.814 1.102.814 2.222 0 1.606-.015 2.903-.015 3.297 0 .32.216.694.825.576C20.565 22.092 24 17.597 24 12.297 24 5.67 18.627.297 12 .297z" />
              GitHub / Michprogram
            </svg>
          </a>

          <span>Autoridad: Rubén Schnettler L. | INACAP</span>
        </footer>
      </main>

    </div>
  );
}