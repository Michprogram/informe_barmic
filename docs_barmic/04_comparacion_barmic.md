# Comparación de Marcos Regulatorios

El incidente de Twitch no solo involucró la extracción de código fuente, sino también la exposición de datos financieros de miles de creadores de contenido. Para comprender la gravedad legal de esta filtración, se presenta una tabla comparativa entre la normativa nacional chilena, el estándar europeo de protección de datos y la normativa específica de la industria de medios de pago.

## Comparativa de Estándares y Legislación

### 1. Ámbito de Aplicación e Industria
* **Ley 19.628 (Chile):** General. Aplica a cualquier base de datos personales en territorio chileno, público o privado.
* **GDPR (UE):** General / Tecnológico. Aplica a cualquier empresa que procese datos de ciudadanos europeos, sin importar dónde esté alojada.
* **PCI-DSS:** Específico. Aplica globalmente a cualquier entidad que almacene, procese o transmita datos de tarjetas.
* **ISO 27001:** Global. Estándar de adopción voluntaria y certificable.

### 2. Notificación de Brechas de Seguridad
* **Ley 19.628 (Chile):** No obligatoria en la ley actual. Queda a criterio de la empresa.
* **GDPR (UE):** Estricta. Obligación de notificar a la autoridad en un plazo máximo de 72 horas.
* **PCI-DSS:** Estricta. Exige notificación inmediata a las marcas de tarjetas de pago y bancos adquirentes.
* **ISO 27001:** Procedimental. Exige un protocolo formal de Gestión de Incidentes (Anexo A.16).

### 3. Obligaciones de Seguridad Técnica
* **Ley 19.628 (Chile):** Genéricas. Exige el "debido cuidado", pero no especifica controles técnicos.
* **GDPR (UE):** Basadas en el riesgo. Exige "privacidad por diseño", cifrado y pruebas de resiliencia.
* **PCI-DSS:** Altamente prescriptivas. Exige firewalls, MFA, pentesting y segmentación de red.
* **ISO 27001:** Sistemática. Controles estrictos de acceso, operaciones y criptografía.

### 4. Sanciones por Incumplimiento
* **Ley 19.628 (Chile):** Multas de bajo impacto. Indemnización por daño patrimonial o moral.
* **GDPR (UE):** Multas severas (hasta €20M o el 4% del volumen de negocio global).
* **PCI-DSS:** Sanciones económicas impuestas por bancos (hasta $100,000 USD mensuales) y revocación de procesamiento.
* **ISO 27001:** Pérdida de la certificación, daño reputacional y caída de contratos.

### 5. Aplicabilidad al caso Twitch
* **Ley 19.628 (Chile):** Responsabilidad civil por la negligencia de exponer ingresos de los *streamers* chilenos.
* **GDPR (UE):** Investigación administrativa y multa por exposición de datos de usuarios europeos.
* **PCI-DSS:** Infracción crítica que arriesga su plataforma de pagos (red no aislada del código fuente).
* **ISO 27001:** Falla de SGSI: Ausencia de auditorías preventivas en cambios de configuración de AWS.

## Análisis Final

Bajo el escenario hipotético de que Twitch operara exclusivamente bajo la **Ley 19.628 chilena**, la empresa no habría tenido la obligación legal de notificar la brecha en un plazo estricto de 72 horas, lo que habría dejado a los *streamers* expuestos a fraudes por más tiempo. 

Sin embargo, al procesar suscripciones y pagos, Twitch está sujeta al cumplimiento transnacional de **PCI-DSS**. La filtración de sus herramientas de *red teaming* y el acceso no autorizado a sus bases de datos demuestra una falla crítica en la segmentación de su red, lo que constituye una infracción directa a este estándar de la industria. 
