import React, { useState } from 'react';
import { 
  FileText, 
  BookOpen, 
  AlertOctagon, 
  Columns, 
  Users, 
  Database, 
  ShieldCheck, 
  Menu,
  X,
  Scale,
  Gavel
} from 'lucide-react';

// --- COMPONENTES DE CADA SECCIÓN ---

function Resumen() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3 border-b pb-4">
        <FileText className="text-blue-600 w-8 h-8" />
        <h2 className="text-2xl font-bold text-slate-800">Resumen Ejecutivo</h2>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">¿Qué pasó?</h3>
        <p className="text-slate-600 mb-4 leading-relaxed">
          En octubre de 2021, la plataforma de transmisión en vivo Twitch (propiedad de Amazon) sufrió una de las mayores brechas de datos de su historia. Un atacante anónimo publicó un enlace torrent en el foro 4chan que contenía un archivo de 125 GB con información altamente confidencial, incluyendo código fuente, herramientas de ciberseguridad y el historial de pagos a creadores de contenido.
        </p>
        
        <h3 className="text-lg font-semibold text-slate-800 mb-2">Impacto del Incidente</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li><strong>Privacidad:</strong> Exposición de los ingresos brutos de miles de streamers, vulnerando su privacidad financiera y exponiéndolos a ingeniería social.</li>
          <li><strong>Propiedad Intelectual:</strong> Liberación de la arquitectura interna y proyectos secretos ("Vapor") a competidores.</li>
          <li><strong>Seguridad:</strong> Filtración de herramientas de <em>red teaming</em>, facilitando futuros ataques por parte de ciberdelincuentes.</li>
        </ul>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex gap-3">
        <Scale className="text-blue-500 shrink-0 mt-1" />
        <p className="text-sm text-blue-800">
          <strong>Nota Metodológica:</strong> Para efectos de este análisis, se evaluará el incidente planteando el escenario hipotético de que Twitch operara bajo jurisdicción chilena.
        </p>
      </div>
    </div>
  );
}

function MarcoNormativo() {
  const leyes = [
    {
      titulo: "Ley 21.459: Delitos Informáticos (Chile)",
      desc: "Adecuada al Convenio de Budapest. Fundamental para tipificar las acciones del atacante (acceso ilícito, interceptación, receptación de datos).",
      color: "border-red-200 bg-red-50"
    },
    {
      titulo: "Ley 19.628: Protección de Vida Privada (Chile)",
      desc: "Regula el tratamiento de datos personales. Clave para evaluar si Twitch respetó el deber de secreto y cómo se aplican los derechos ARCO.",
      color: "border-emerald-200 bg-emerald-50"
    },
    {
      titulo: "GDPR (Unión Europea)",
      desc: "Estándar internacional estricto. Obliga a notificar brechas en menos de 72 horas. Sirve para medir el nivel de respuesta de la empresa.",
      color: "border-blue-200 bg-blue-50"
    },
    {
      titulo: "CFAA (Estados Unidos)",
      desc: "Ley federal estadounidense contra el fraude informático. Es la ley que rige la persecución directa del atacante anónimo en su país de origen.",
      color: "border-purple-200 bg-purple-50"
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3 border-b pb-4">
        <BookOpen className="text-emerald-600 w-8 h-8" />
        <h2 className="text-2xl font-bold text-slate-800">Marco Normativo</h2>
      </div>
      <p className="text-slate-600 mb-4">
        Normativas legales nacionales e internacionales aplicables para evaluar la responsabilidad de la empresa y la ilegalidad del ataque:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {leyes.map((ley, idx) => (
          <div key={idx} className={`p-5 rounded-lg border ${ley.color} shadow-sm`}>
            <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
              <Gavel className="w-4 h-4" /> {ley.titulo}
            </h3>
            <p className="text-sm text-slate-700">{ley.desc}</p>
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
        <h2 className="text-2xl font-bold text-slate-800">Tipificación de Delitos</h2>
      </div>
      <p className="text-slate-600">
        Mapeo de las acciones del atacante según la <strong>Ley 21.459</strong> de Chile:
      </p>
      <div className="space-y-4">
        <div className="bg-white p-5 rounded-lg border-l-4 border-l-red-500 shadow-sm">
          <h3 className="font-bold text-lg text-slate-800">1. Infiltración en la red interna</h3>
          <p className="text-sm text-slate-500 mb-2">Acción: Ingreso a repositorios aprovechando error de configuración.</p>
          <div className="bg-slate-100 p-3 rounded text-slate-700 text-sm">
            <strong>Delito: Acceso Ilícito (Art. 2°)</strong> - El atacante vulneró activamente el perímetro de seguridad para ingresar a un entorno restringido superando medidas de seguridad.
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg border-l-4 border-l-orange-500 shadow-sm">
          <h3 className="font-bold text-lg text-slate-800">2. Extracción masiva de datos</h3>
          <p className="text-sm text-slate-500 mb-2">Acción: Copia de 125 GB de código fuente y datos financieros.</p>
          <div className="bg-slate-100 p-3 rounded text-slate-700 text-sm">
            <strong>Delito: Interceptación Ilícita (Art. 3°) y Agravante (Art. 2°)</strong> - Captura de datos en tránsito/reposo, agravado por el ánimo de apoderarse de la información comercial.
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg border-l-4 border-l-yellow-500 shadow-sm">
          <h3 className="font-bold text-lg text-slate-800">3. Publicación en Internet</h3>
          <p className="text-sm text-slate-500 mb-2">Acción: Creación de torrent y publicación en foro 4chan.</p>
          <div className="bg-slate-100 p-3 rounded text-slate-700 text-sm">
            <strong>Delito: Receptación de datos informáticos (Art. 6°)</strong> - Distribuir o almacenar datos informáticos conociendo su origen ilícito con el fin de comercializar o perjudicar.
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
        <h2 className="text-2xl font-bold text-slate-800">Comparación Regulatoria</h2>
      </div>
      <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-800 text-white">
              <th className="p-4 border-b font-semibold">Eje de Análisis</th>
              <th className="p-4 border-b font-semibold">Ley 19.628 (Chile)</th>
              <th className="p-4 border-b font-semibold">GDPR (Europa)</th>
              <th className="p-4 border-b font-semibold">PCI-DSS (Financiero)</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="border-b hover:bg-slate-50">
              <td className="p-4 font-medium text-slate-800">Ámbito</td>
              <td className="p-4 text-slate-600 text-sm">General (Bases de datos en Chile)</td>
              <td className="p-4 text-slate-600 text-sm">General (Datos de europeos)</td>
              <td className="p-4 text-slate-600 text-sm">Específico (Procesadores de tarjetas)</td>
            </tr>
            <tr className="border-b hover:bg-slate-50 bg-slate-50/50">
              <td className="p-4 font-medium text-slate-800">Notificación de Brechas</td>
              <td className="p-4 text-slate-600 text-sm text-red-600 font-medium">No obligatoria</td>
              <td className="p-4 text-slate-600 text-sm text-emerald-600 font-medium">Máx. 72 horas</td>
              <td className="p-4 text-slate-600 text-sm text-emerald-600 font-medium">Inmediata a bancos</td>
            </tr>
            <tr className="border-b hover:bg-slate-50">
              <td className="p-4 font-medium text-slate-800">Seguridad Técnica</td>
              <td className="p-4 text-slate-600 text-sm">Genérica ("debido cuidado")</td>
              <td className="p-4 text-slate-600 text-sm">Basada en riesgo (Cifrado)</td>
              <td className="p-4 text-slate-600 text-sm">Prescriptiva (Firewalls, Pentesting)</td>
            </tr>
            <tr className="hover:bg-slate-50 bg-slate-50/50">
              <td className="p-4 font-medium text-slate-800">Sanciones</td>
              <td className="p-4 text-slate-600 text-sm">Indemnización civil, multas bajas</td>
              <td className="p-4 text-slate-600 text-sm">Hasta 4% facturación global</td>
              <td className="p-4 text-slate-600 text-sm">Multas bancarias, revocación de red</td>
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
        <h2 className="text-2xl font-bold text-slate-800">Responsabilidades Legales</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Atacante */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-slate-800 p-4">
            <h3 className="text-white font-bold text-lg text-center">El Atacante (Hacker)</h3>
          </div>
          <div className="p-5 space-y-4">
            <div>
              <strong className="text-red-600">Penal:</strong>
              <p className="text-sm text-slate-600 mt-1">Imputado directo. Penas según Ley 21.459 (Acceso Ilícito, Interceptación, Receptación).</p>
            </div>
            <div>
              <strong className="text-orange-600">Civil:</strong>
              <p className="text-sm text-slate-600 mt-1">Responsabilidad extracontractual (Art. 2314 CC). Obligado a indemnizar a Twitch y usuarios.</p>
            </div>
            <div>
              <strong className="text-slate-400">Administrativa:</strong>
              <p className="text-sm text-slate-500 mt-1">No aplica. Su actuar recae en lo penal y civil.</p>
            </div>
          </div>
        </div>

        {/* Twitch */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-purple-600 p-4">
            <h3 className="text-white font-bold text-lg text-center">Twitch (La Empresa)</h3>
          </div>
          <div className="p-5 space-y-4">
            <div>
              <strong className="text-slate-400">Penal:</strong>
              <p className="text-sm text-slate-500 mt-1">No posee. Es la víctima del delito, el hackeo no fue en beneficio de la empresa (Ley 20.393).</p>
            </div>
            <div>
              <strong className="text-orange-600">Civil:</strong>
              <p className="text-sm text-slate-600 mt-1">Negligencia en custodia (Art. 23 Ley 19.628). Debe indemnizar daño patrimonial/moral a streamers.</p>
            </div>
            <div>
              <strong className="text-purple-600">Administrativa:</strong>
              <p className="text-sm text-slate-600 mt-1">Falla al "debido cuidado" (Art. 11). Expuesta a multas severas por el GDPR (Art. 83) al operar en Europa.</p>
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
        <h2 className="text-2xl font-bold text-slate-800">Tratamiento de Datos (Ley 19.628)</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 bg-teal-50 p-5 rounded-lg border border-teal-200">
          <h3 className="font-bold text-teal-800 mb-2">Datos Personales</h3>
          <p className="text-sm text-teal-900">
            Se filtraron correos, contraseñas y el <strong>historial de pagos</strong>. Aunque es financiero, permite perfilar la capacidad económica del individuo, exigiendo estricta seguridad.
          </p>
        </div>
        <div className="flex-1 bg-rose-50 p-5 rounded-lg border border-rose-200">
          <h3 className="font-bold text-rose-800 mb-2">Datos Sensibles</h3>
          <p className="text-sm text-rose-900">
            Los historiales de visualización y chats permiten inferir ideologías, orientación sexual o hábitos de vida privada mediante el cruce de datos.
          </p>
        </div>
      </div>

      <h3 className="font-bold text-lg text-slate-800 mb-4">Aplicación de Derechos ARCO</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded border shadow-sm flex gap-3">
          <div className="bg-slate-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">A</div>
          <div>
            <strong className="block text-slate-800">Acceso</strong>
            <span className="text-sm text-slate-600">Saber si sus pagos estuvieron en los 125GB filtrados.</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded border shadow-sm flex gap-3">
          <div className="bg-slate-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">R</div>
          <div>
            <strong className="block text-slate-800">Rectificación</strong>
            <span className="text-sm text-slate-600">Corregir datos inexactos financieros filtrados.</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded border shadow-sm flex gap-3">
          <div className="bg-slate-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">C</div>
          <div>
            <strong className="block text-slate-800">Cancelación</strong>
            <span className="text-sm text-slate-600">Exigir la eliminación permanente de la cuenta y tarjetas.</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded border shadow-sm flex gap-3">
          <div className="bg-slate-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">O</div>
          <div>
            <strong className="block text-slate-800">Oposición</strong>
            <span className="text-sm text-slate-600">Oponerse a que Twitch siga procesando su información.</span>
          </div>
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
        <h2 className="text-2xl font-bold text-slate-800">Conclusiones y Recomendaciones</h2>
      </div>

      <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
        <h3 className="font-bold text-lg text-slate-800 mb-4">Medidas Técnicas y Organizativas</h3>
        <ul className="space-y-3 mb-6">
          <li className="flex gap-2 items-start">
            <div className="mt-1 w-2 h-2 rounded-full bg-green-500 shrink-0"></div>
            <p className="text-slate-600 text-sm"><strong>Infraestructura como Código (IaC):</strong> Pruebas automatizadas para evitar errores de configuración manuales de servidores.</p>
          </li>
          <li className="flex gap-2 items-start">
            <div className="mt-1 w-2 h-2 rounded-full bg-green-500 shrink-0"></div>
            <p className="text-slate-600 text-sm"><strong>Segmentación de Red:</strong> Aislar entornos de desarrollo/código fuente de las bases de datos de pagos.</p>
          </li>
          <li className="flex gap-2 items-start">
            <div className="mt-1 w-2 h-2 rounded-full bg-green-500 shrink-0"></div>
            <p className="text-slate-600 text-sm"><strong>Plan de Respuesta (IRP):</strong> Mejorar protocolos para cumplir con notificaciones rápidas a los usuarios afectados (ej. 72 horas del GDPR).</p>
          </li>
        </ul>

        <div className="bg-slate-50 p-5 rounded border border-slate-200">
          <h3 className="font-bold text-slate-800 mb-2">Reflexión Final</h3>
          <p className="text-sm text-slate-600 italic">
            "La ciberseguridad no es solo un desafío técnico, sino un compromiso ético. La Ley 21.459 nos da herramientas modernas para perseguir el acceso ilícito, pero existe una brecha importante en la Ley 19.628 respecto a la obligación de notificar incidentes. Una infraestructura resiliente debe estar respaldada por un marco legal que garantice los derechos de los usuarios chilenos frente a gigantes tecnológicos globales."
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
      default: return <Resumen />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans">
      
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
        md:block w-full md:w-72 bg-slate-900 text-slate-300 flex-shrink-0 shadow-xl
        absolute md:relative z-10 min-h-screen
      `}>
        <div className="p-6 hidden md:block">
          <div className="flex items-center gap-3 text-white mb-2">
            <ShieldCheck className="text-red-400 w-8 h-8" />
            <h1 className="text-xl font-bold leading-tight">Análisis de Ciberseguridad</h1>
          </div>
          <p className="text-xs text-slate-400 mt-2">Evaluación Sumativa 2 - INACAP</p>
          <p className="text-xs font-mono text-slate-500 mt-1">informe_barmic</p>
        </div>

        <nav className="mt-4 md:mt-8 flex flex-col gap-1 px-4 pb-8">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors duration-200
                  ${isActive 
                    ? 'bg-blue-600 text-white font-medium shadow-md' 
                    : 'hover:bg-slate-800 hover:text-white'}
                `}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
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
        <footer className="max-w-4xl mx-auto mt-16 pt-6 border-t border-slate-200 text-center md:text-left flex flex-col md:flex-row justify-between text-sm text-slate-500">
          <span>Estudiante: Michele Barriga</span>
          <span>Docente: Rubén Schnettler L.</span>
        </footer>
      </main>

    </div>
  );
}