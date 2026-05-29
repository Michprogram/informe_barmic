# Responsabilidades Legales de los Actores

En el análisis del caso de filtración de datos de Twitch (2021), es imperativo distinguir entre el perpetrador del ataque y la plataforma vulnerada. Aplicando el marco legal chileno e internacional aplicable, se identifican los siguientes actores y sus respectivas responsabilidades:

## 1. El Atacante (Hacker Anónimo)
Este actor es el autor material y directo de la vulneración a los sistemas de la infraestructura de Twitch y de la sustracción de los 125 GB de datos.

* **Responsabilidad Penal:** Es el principal imputado. Se le aplican las penas establecidas en la **Ley 21.459 sobre Delitos Informáticos**, específicamente por los delitos de **Acceso Ilícito (Art. 2°)**, **Interceptación Ilícita (Art. 3°)** y **Receptación de datos informáticos (Art. 6°)**.
* **Responsabilidad Civil:** Es sujeto de responsabilidad extracontractual. De acuerdo con los **Artículos 2314 y 2329 del Código Civil chileno**, el atacante está obligado a indemnizar todos los perjuicios (daño emergente, lucro cesante y daño moral) causados tanto a Twitch (por la filtración del código fuente) como a los *streamers* expuestos.
* **Responsabilidad Administrativa:** No aplica a este actor, dado que su actuar doloso recae estrictamente en las esferas penal y civil.

## 2. Twitch Interactive (La Empresa / Responsable de los Datos)
Como plataforma recaudadora y dueña de la infraestructura, Twitch actúa como el custodio legal de la información confidencial y de los datos financieros de los creadores de contenido.

* **Responsabilidad Penal:** **No posee**. Bajo la legislación chilena (incluyendo la Ley 20.393 sobre Responsabilidad Penal de las Personas Jurídicas), la plataforma es la víctima del delito de sabotaje y extracción de datos. Dado que el hackeo no se perpetró en beneficio de la empresa, no existe persecución penal en su contra.
* **Responsabilidad Civil:** Enfrenta una severa responsabilidad por negligencia en la custodia de la información. El **Artículo 23 de la Ley 19.628 (Sobre Protección de la Vida Privada)** establece que el responsable del registro o banco de datos debe indemnizar el daño patrimonial y moral que cause por el tratamiento indebido de los datos. Los *streamers* cuyos ingresos fueron expuestos tienen el derecho legal de demandar a la empresa por los daños derivados de esta brecha.
* **Responsabilidad Administrativa:** Posee responsabilidad directa por fallas operativas. El **Artículo 11 de la Ley 19.628** exige que el responsable de los datos actúe con el debido cuidado y reserva. Además, operando a nivel global, Twitch se somete a la responsabilidad administrativa del **GDPR (Unión Europea, Art. 83)**, bajo el cual se exponen a multas y sanciones dictadas por las agencias de protección de datos debido a la falla técnica (error de configuración de servidores) que permitió la brecha masiva.

## 3. Amazon (Empresa Matriz y Proveedor Cloud)
Al ser Twitch una subsidiaria de Amazon, y considerando que la infraestructura vulnerada correspondía a servidores en la nube de Amazon Web Services (AWS), la matriz también adquiere un rol dentro del análisis de responsabilidades.

* **Responsabilidad Penal:** Al igual que su subsidiaria, es inexistente. Amazon es dueña de la infraestructura vulnerada y víctima del ataque, por lo que no enfrenta persecución penal según las leyes de responsabilidad jurídica.
* **Responsabilidad Civil:** Podría enfrentar responsabilidad civil solidaria o subsidiaria. Según el **Artículo 2320 del Código Civil** (responsabilidad por el hecho de los dependientes), si los afectados logran demostrar que Amazon proveyó una arquitectura de nube intrínsecamente defectuosa para su filial, o falló en su deber de supervigilar los estándares de seguridad de Twitch, la matriz podría ser obligada a responder patrimonialmente.
* **Responsabilidad Administrativa:** Bajo normativas internacionales como el **GDPR**, las agencias de protección de datos tienen la facultad de escalar las multas económicas. Si se comprueba que la matriz tiene injerencia directa en las políticas corporativas de privacidad de la filial, las sanciones administrativas pueden calcularse sobre los ingresos globales de Amazon.

## 4. 4chan (Foro Público / Nodo de Difusión)
Al ser el foro de internet donde el atacante publicó el enlace torrent original con los 125 GB de datos, 4chan actúa como la plataforma intermediaria de difusión de la filtración.

* **Responsabilidad Penal:** Inicialmente, se encuentra protegido por los principios de puerto seguro (*Safe Harbor*) como proveedor de servicios de internet. Sin embargo, arriesgaría cargos como cómplice o encubridor bajo el **Artículo 6 de la Ley 21.459** (receptación y distribución de datos) si existiera una negativa dolosa a eliminar el enlace malicioso tras recibir una orden judicial formal.
* **Responsabilidad Civil:** Enfrenta una posible responsabilidad por omisión. Bajo mecanismos internacionales como el *Notice and Takedown* (notificación y retirada), 4chan está obligado a responder y puede ser demandado para indemnizar daños si ignora deliberadamente los requerimientos formales exigiendo el cese de la distribución del material robado.
* **Responsabilidad Administrativa:** En un escenario de inacción por parte del foro, las autoridades de telecomunicaciones podrían dictar medidas administrativas dirigidas a los Proveedores de Servicios de Internet (ISP) locales, ordenando el bloqueo de DNS del dominio de 4chan para mitigar el daño a las víctimas chilenas.