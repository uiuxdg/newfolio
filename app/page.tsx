"use client";
import { Timeline } from "@/components/ui/timeline";
import CTASection from "@/components/ui/cta-section";
import Image from "next/image";
import { CollapsibleContent } from "@/components/ui/collapsible-content";


export default function Home() {
  const data = [
    {
      title: "Commonwealth Cultural & Archaeological Assessors, LLC",
      content: (
        <CollapsibleContent
          preview={
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
                Selected engineering and GIS work including QGIS automation tooling, USGS TNM API integration, computer-vision assisted georeferencing research, LiDAR/DEM processing workflows, a geotagged field data collection app, internal storage infrastructure, document automation, and automated cartographic production. These tools and workflows were used in projects for clients including Verizon, Eversource Energy, and the U.S Army Corps of Engineers.
              </p>
            </div>
          }
          fullContent={
            <div className="pt-8">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <h3 className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-bold">
                    Geospatial Automation & QGIS Tooling
                  </h3>
                  <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-4">
                    I developed custom geospatial automation tools in QGIS to support archaeological survey design and spatial analysis. This work included Python scripts and processing models to generate rotated survey grids, derive rectangles from rotated point sets, enforce dimensional and spatial constraints, and automatically populate attributes and labels. These tools reduced manual GIS editing, ensured spatial consistency across projects, and enabled rapid reconfiguration when survey parameters changed.
                  </p>
                  <div className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal">
                    <span className="font-bold">Tools &amp; Technologies:</span>
                    <ul className="list-disc list-inside">
                      <li>QGIS (3.x)</li>
                      <li>Python (PyQGIS API)</li>
                      <li>QGIS Processing Models</li>
                      <li>Vector geometry operations</li>
                      <li>Coordinate transformations &amp; rotation math</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-bold">
                    Historical Map Retrieval & USGS API Integration
                  </h3>
                  <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-4">
                    I designed and implemented a custom QGIS plugin that integrates directly with the USGS The National Map (TNM) Access API to search for, filter, and download Historical Topographic Map Collection (HTMC) GeoTIFFs based on the current map canvas extent. The plugin automates API querying, spatial filtering, batch downloads, and raster ingestion, allowing historical basemaps to be assembled entirely within QGIS.
                  </p>
                  <div className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal">
                    <span className="font-bold">Tools &amp; Technologies:</span>
                    <ul className="list-disc list-inside">
                      <li>Python</li>
                      <li>PyQGIS</li>
                      <li>USGS TNM Access API</li>
                      <li>REST API requests</li>
                      <li>GeoTIFF raster handling</li>
                      <li>QGIS plugin framework</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-bold">
                    Automated Georeferencing & Computer Vision Research
                  </h3>
                  <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-4">
                    I prototyped an automated, content-based georeferencing workflow for historical maps based on current academic research. This work explored feature matching using roads, coastlines, and buildings, as well as OCR-derived place names to improve alignment accuracy. The goal was to reduce manual control-point placement and enable scalable georeferencing across large historical map collections.
                  </p>
                  <div className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal">
                    <span className="font-bold">Tools &amp; Technologies:</span>
                    <ul className="list-disc list-inside">
                      <li>Python</li>
                      <li>OpenCV (feature detection &amp; matching)</li>
                      <li>OCR pipelines (text extraction from map imagery)</li>
                      <li>Spatial transformation algorithms</li>
                      <li>Academic computer-vision methodologies</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-bold">
                    LiDAR & DEM Processing Workflows
                  </h3>
                  <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-4">
                    I built repeatable GIS workflows for processing LiDAR-derived DEMs, including raster reprojection, contour generation at fine intervals, terrain analysis, and cartographic optimization. These workflows were scripted and standardized to ensure consistent outputs across projects and to reduce processing time for high-resolution terrain products used in archaeological sensitivity modeling.
                  </p>
                  <div className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal">
                    <span className="font-bold">Tools &amp; Technologies:</span>
                    <ul className="list-disc list-inside">
                      <li>QGIS</li>
                      <li>GDAL</li>
                      <li>Raster analysis tools</li>
                      <li>LiDAR-derived DEMs</li>
                      <li>Automated cartographic layout workflows</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-bold">
                    Geotagged Field Photo & STP Data Collection Application
                  </h3>
                  <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-4">
                    I designed and built a web-based field data collection application to support archaeological documentation at Commonwealth Cultural &amp; Archaeological Assessors. In addition to geotagged photo capture and mapping, the app supports structured shovel test pit (STP) data entry, including stratigraphy, depths, soil descriptions, and observations. The system automatically generates standardized STP profile graphics from entered data, ensuring consistent visual outputs for reporting. Field photos, STP records, and generated graphics are spatially linked and exportable for direct integration into GIS and regulatory reports, reducing transcription errors and significantly accelerating post-fieldwork processing.
                  </p>
                  <div className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal">
                    <span className="font-bold">Tools &amp; Technologies:</span>
                    <ul className="list-disc list-inside">
                      <li>JavaScript</li>
                      <li>React</li>
                      <li>Next JS</li>
                      <li>CSS</li>
                      <li>PostgreSQL</li>
                      <li>PostGIS</li>
                      <li>Leaflet</li>
                      <li>EXIF GPS metadata extraction</li>
                      <li>Structured form-based data collection</li>
                      <li>Programmatic SVG/Canvas-based graphic generation</li>
                      <li>Client-side geospatial visualization</li>
                      <li>Data export for GIS and report integration</li>
                    </ul>
                  </div>
                  <div className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Image
                        src="/geotag1.png"
                        alt="Geotagged field photo app - screen 1"
                        width={1000}
                        height={1000}
                        className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                      />
                      <Image
                        src="/geotag2.png"
                        alt="Geotagged field photo app - screen 2"
                        width={1000}
                        height={1000}
                        className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                      />
                      <Image
                        src="/geotag3.png"
                        alt="Geotagged field photo app - screen 3"
                        width={1000}
                        height={1000}
                        className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                      />
                      <Image
                        src="/geotag4.png"
                        alt="Geotagged field photo app - screen 4"
                        width={1000}
                        height={1000}
                        className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                      />
                      <Image
                        src="/geotag5.png"
                        alt="Geotagged field photo app - screen 5"
                        width={1000}
                        height={1000}
                        className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                      />
                      <Image
                        src="/geotag6.png"
                        alt="Geotagged field photo app - screen 6"
                        width={1000}
                        height={1000}
                        className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                      />
                      <Image
                        src="/geotag7.png"
                        alt="Geotagged field photo app - screen 7"
                        width={1000}
                        height={1000}
                        className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-bold">
                    Server Infrastructure & Data Management Systems
                  </h3>
                  <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-4">
                    I designed and maintained CCAA’s internal data infrastructure to support large geospatial datasets, imagery, and long-term project archives. This included configuring storage pools, snapshot replication, external drive workflows, and network access to support both active GIS work and regulatory data retention requirements.
                  </p>
                  <div className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal">
                    <span className="font-bold">Tools &amp; Technologies:</span>
                    <ul className="list-disc list-inside">
                      <li>TrueNAS SCALE</li>
                      <li>ZFS storage &amp; snapshot replication</li>
                      <li>SMB / network file sharing</li>
                      <li>External drive &amp; backup workflows</li>
                      <li>Local network configuration</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-bold">
                    Document Automation & Report Template Engineering
                  </h3>
                  <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-4">
                    I developed advanced Microsoft Word templates and VBA macros to automate archaeological report production. These templates support dynamic section hiding, automatic renumbering, synchronized tables of contents, and clean PDF export without duplicating content across documents. The system reduced formatting time and prevented numbering and layout errors in regulatory submissions.
                  </p>
                  <div className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal">
                    <span className="font-bold">Tools &amp; Technologies:</span>
                    <ul className="list-disc list-inside">
                      <li>Microsoft Word</li>
                      <li>VBA (Visual Basic for Applications)</li>
                      <li>Dynamic styles &amp; heading hierarchies</li>
                      <li>Automated TOC and numbering logic</li>
                      <li>PDF export workflows</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-bold">
                    GIS-Driven Visualization & Automated Map Production
                  </h3>
                  <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-4">
                    I implemented automated map layout and export workflows in QGIS, including atlas-based layouts, rotated extents, standardized figure generation, and dynamic callouts. These workflows ensured that figures remained synchronized with spatial data throughout project revisions, reducing rework and improving consistency in final deliverables.
                  </p>
                  <div className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal">
                    <span className="font-bold">Tools &amp; Technologies:</span>
                    <ul className="list-disc list-inside">
                      <li>QGIS Print Layout &amp; Atlas</li>
                      <li>Python (PyQGIS)</li>
                      <li>Dynamic labeling &amp; callouts</li>
                      <li>Batch map export pipelines</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-bold">
                    Commonwealth Cultural &amp; Archaeological Assessors Website
                  </h3>
                  <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-4">
                    I designed and built a company landing page and website for CCAA
                    . They requested a traditional, basic yet modern design language that reflected their core services. I settled on a palette of warm, earthy colors, a clean sans-serif font, and a simple, content-focused layout, with a few subtle scroll and hover animations to keep the user engaged. Here is a gif of the homepage:
                  </p>
                  <div className="flex flex-col gap-4">
                    <Image
                      src="/commonwealth.gif"
                      alt="Commonwealth Cultural homepage animation"
                      width={1000}
                      height={1000}
                      className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                      src="/commonwealth.png"
                      alt="Commonwealth Cultural homepage screenshot"
                      width={1000}
                      height={1000}
                      className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                  </div>
                </div>
              </div>
            </div>
          }
        />
      ),
    },
    {
      title: "Interactive Charts with AI",
      content: (
        <CollapsibleContent
          preview={
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
                I built and launched <a href="https://calcgen.ai" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">CalcGen AI</a> independently from scratch, a new data visualization tool that uses a multi-agent AI framework to make data research, analysis, visualization, and sharing take seconds instead of hours. CalcGen had a very successful launch, getting 2200+ users in the first week of beta, and featured as a trending product in some of the biggest AI newsletters in the world.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Image
                  src="/calcgen1.gif"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="/1.png"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            </div>
          }
          fullContent={
            <div className="pt-8">
              <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
                Designed to research and visualize any data question, CalcGen uses a multi-agent and search retrieval system to analyze a user query, collect data from either the web or an uploaded file, and create a beautiful, interactive, and customizable visualization based on the user's request, which can then be shared or embedded anywhere with one click. The tool can handle queries such as "plot the top ten financial tech companies by market cap" or "plot this data on a chart, and let me select the column to display".
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Image
                  src="/calcgen2.gif"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="/2.png"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>

              <div className="pt-8">

<p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
 Preliminary User flows and UI wireframing was done in Excalidraw and Figma, to plan out the architecture and design before development began.
</p>
<div className="grid grid-cols-1 gap-4">
  <Image
    src="/calcgen_wireframe.png"
    alt="startup template"
    width={500}
    height={500}
    className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
  />

</div>
</div>



              <div className="pt-8">

              <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
                CalcGen was built in Next.js, with a custom-built AI agent framework, and uses a combination of various LLMs, structured outputs, and search to answer any data question. The frontend is styled with Tailwind CSS. CalcGen appeared as a trending product in prominent AI newsletters, including Rundown AI, Superhuman, and Superpower Daily, reaching over 2M total subscribers, and gaining over 1000 followers on instagram.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Image
                  src="/calcgen3.gif"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="/3.png"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
              </div>
              <div className="pt-8">

<p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
  Data analysis and visualization tools are notoriously tedious and time-consuming to use. CalcGen is designed to provide a fast, easy, and beautiful way to analyze and visualize any data question, from any device. It also has the capability of creating custom graphing calculators, based on any provided formula, so it can visualize queries such as e.g. "compare the appreciation of two assets over time, based on given starting values, growth rates, and time periods."
</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <Image
    src="/calcgen4.gif"
    alt="startup template"
    width={500}
    height={500}
    className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
  />
  <Image
    src="/5.png"
    alt="startup template"
    width={500}
    height={500}
    className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
  />
</div>
</div>
<div className="pt-8">

<p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
Users can edit the generated title and description, change the chart type, and apply any of 40+ provided themes to their creation. They can also access our showcase of community creations made publicly available for inspiration. Creations can be shared as a link, or embedded into any website, or tools such as Notion, Miro, Google Classroom, Shopify, and more.</p>
<div className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
  <span className="font-bold">Technologies used:</span>
  <ul className="list-disc list-inside mt-2">
    <li>React</li>
    <li>Next JS</li>
    <li>Typescript</li>
    <li>Tailwind CSS</li>
    <li>Chart.js</li>
    <li>Perplexity Sonar API</li>
    <li>OpenAI API</li>
    <li>Zod</li>
    <li>Nextauth</li>
    <li>Prisma</li>
    <li>Neon Serverless PostgresSQL</li>
    <li>Stripe Payments API</li>
    <li>Resend Email API</li>
    <li>Firebase Cloud Functions</li>
    <li>Markdown</li>
    <li>Figma for design</li>
    <li>Some other tools</li>
  </ul>
</div>
</div>

            </div>
          }
        />
      ),
    },
    {
      title: "Personal Finance for Young Students",
      content: (
        <CollapsibleContent
          preview={
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
                At AKALA, a 2024 Techstars edtech startup backed by Google and other institutional investors, I designed and built a new way for young students to learn about the costs of adult life to better plan for their future. 
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Image
                  src="/akala1.gif"
                  alt="hero template"
                  width={500}
                  height={500}
                  className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="/akala2.gif"
                  alt="feature template"
                  width={500}
                  height={500}
                  className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            </div>
          }
          fullContent={
            <div className="pt-8">
              <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
                Leading a team of graduate interns from USC Engineering School, I created Dreamcatcher, an animated experience designed to help young people understand the different costs of various lifestyle choices in an entertaining and engaging way.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Image
                  src="/akala3.gif"
                  alt="bento template"
                  width={500}
                  height={500}
                  className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="/akala4.gif"
                  alt="cards template"
                  width={500}
                  height={500}
                  className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
              <div className="pt-8">
              <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
                AKALA Dreamcatcher was built in React, Next.js, Three.js, and GSAP, along with several other supporting JS libraries. The fully responsive web app was designed to be accessible and delightful to use on desktop, tablet, and mobile devices. 
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Image
                  src="/akala5.gif"
                  alt="bento template"
                  width={500}
                  height={500}
                  className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="/akala1.jpg"
                  alt="cards template"
                  width={500}
                  height={500}
                  className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
              </div>

              <div className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal my-8">
                <span className="font-bold">Technologies used:</span>
                <ul className="list-disc list-inside mt-2">
                  <li>React</li>
                  <li>Next JS</li>
                  <li>Typescript</li>
                  <li>Three JS</li>
                  <li>OpenGL/GLSL</li>
                  <li>Blender</li>
                  <li>GSAP</li>
                  <li>Tailwind CSS</li>
                  <li>Redux State Management</li>
                  <li>Chart.js</li>
                  <li>Nextauth</li>
                  <li>Prisma</li>
                  <li>Neon Serverless PostgresSQL</li>
                  <li>Stripe Payments API</li>
                  <li>Figma for design</li>
                </ul>
              </div>


            </div>
            
            
          }
        />
      ),
    },
    {
      title: "Cognitive Load and Multimedia Learning",
      content: (
        <CollapsibleContent
          preview={
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
                To complete my undergrad at Williams College, I completed a final independent study in Cognitive Science, exploring the role of cognitive load in digital learning interfaces.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <Image
                  src="/williams1.png"
                  alt="hero template"
                  width={500}
                  height={500}
                  className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                {/* <Image
                  src="https://assets.aceternity.com/features-section.png"
                  alt="feature template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                /> */}
              </div>
            </div>
          }
          fullContent={
            <div className="pt-8">
              <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
                My work included a literature review, a survey, and a series of experiments testing the effects of different digital learning interfaces on cognitive load. My findings supported the idea that factors including the amount of information displayed, the amount of time spent on each page, and the modalities of information all play a role in how much cognitive load is experienced, and that measured cognitive load negatively correlates with retention and recall.
              </p>
             
            </div>
          }
        />
      ),
    },
    {
      title: "Curriculum Design Platform for Teachers",
      content: (
        <CollapsibleContent
        preview={
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
            At ThinkCERCA, a Series B edtech startup, backed by the Bill Gates Foundation and others, I designed a platform for teachers to gain skills to improve their curriculum design.
          </p>
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/thinkcerca1.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/thinkcerca2.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
           
            </div>
          </div>
        }
        fullContent={
          <div className="pt-8">
             <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
           The platform was built in Hubspot's HubLMS, and included a series of interactive, gamified modules. Prototyping was done in Figma. Working with a team of 4, including a project manager, content writer, and Hubspot expert, I was responsible for the design and development of the platform, including the creation of the course structure, the visual design of the interactive modules, and the user experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/thinkcerca3.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
                        <Image
              src="/thinkcerca4.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />

          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal my-8">
          Before development began, I completed a comprehensive UX research and competitive analysis study on leading edtech products in the space. The research was used to inform the design of the platform, and the final product was a success, being used by over 1200 teachers in the 2023-2024 school year.
          </p>

          </div>
        }
        />
      ),
    },
    {
      title: "AI Course Management for Universities",
      content: (
        <CollapsibleContent
          preview={
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
                At Williams, I cofounded a startup that used AI to help students effectively manage their syllabi, assignments, and notes. We were among the 4 winners of the 2023 Williams College Pitch Competition who recieved funding to develop our product. As a student, I also completed extensive coursework in Cognitive Science, Theoretical AI, UX Design, and Computer Science.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Image
                  src="/chateph1.png"
                  alt="hero template"
                  width={500}
                  height={500}
                  className="rounded-lg object-contain h-auto w-full"
                />


                <Image
                  src="/chateph2.png"
                  alt="feature template"
                  width={500}
                  height={500}
                  className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            </div>
          }
          fullContent={
            <div className="pt-8">
              <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
The app provides an AI-based productivity tool for college students to manage courses, scheduling, and notes. Working alongside my technical cofounder, I designed mockups, prototypes, and our final pitch deck that was presented in front of students, professors, and potential investors.             </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Image
                  src="/chateph3.png"
                  alt="bento template"
                  width={500}
                  height={500}
                  className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="/chateph4.png"
                  alt="cards template"
                  width={500}
                  height={500}
                  className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                                <Image
                  src="/cowgif2.gif"
                  alt="cards template"
                  width={500}
                  height={500}
                  className="rounded-lg col-span-full object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            </div>
          }
        />
      ),
    },
    {
      title: "Scheduling and Accountability for Sports Teams",
      content: (
        <CollapsibleContent
          preview={
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
                At Beat the Streets, a national sports-based youth development nonprofit, I designed a mobile platform for athletes and coaches to track their progress and goals, as well as manage teams, schedule practices, and more.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Image
                  src="/bts2.png"
                  alt="hero template"
                  width={500}
                  height={500}
                  className="rounded-lg object-contain h-auto w-full "
                />
                <Image
                  src="/bts4.png"
                  alt="feature template"
                  width={500}
                  height={500}
                  className="rounded-lg object-contain h-auto w-full "
                />

              </div>
            </div>
          }
          fullContent={
            <div className="pt-8">
              <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal my-8">
              As the lead UI/UX designer, I spearheaded the design of a comprehensive mobile app tailored to the needs of athletes, coaches, and administrators within BTSNE. My responsibilities encompassed creating preliminary user flows and personas, creating an interactive, high-fidelity prototype in Figma, designing an animated graphic logo for the app's loading screen, and developing a user-friendly design system aligned with BTSNE's brand identity. I worked in close collaboration with the CEO and the development team to ensure the design solutions were technically feasible and aligned with the organization's mission. The design was recieved well by stakeholders, and contributed to our fundraising campaign exceeding our goal by $80,000.              </p>
              <div className="grid grid-cols-1 gap-4">
                <Image
                  src="/bts8.png"
                  alt="bento template"
                  width={500}
                  height={500}
                  className="rounded-lg object-contain  w-full"
                />
               
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/bts9.png"
                  alt="bento template"
                  width={500}
                  height={500}
                  className="rounded-lg col-span-full object-contain  w-full"
                />
                                <Image
                  src="/bts10.png"
                  alt="bento template"
                  width={500}
                  height={500}
                  className="rounded-lg object-contain  w-full"
                />
                                <Image
                  src="/bts11.png"
                  alt="bento template"
                  width={500}
                  height={500}
                  className="rounded-lg object-contain  w-full"
                />
               
              </div>
              <div className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
                <h3 className="font-bold pt-4">Interactive Figma Prototype:</h3>
                <p>Utilizing Figma, I designed a high-fidelity prototype that allowed stakeholders to experience and interact with the app's design before development began. This process facilitated early feedback and iterative improvements, ensuring the final design met user needs effectively.</p>

                <h3 className="font-bold pt-4">Animated Graphic Logo:</h3>
                <p>To enhance brand recognition and create a memorable first impression, I created an animated logo for the app's loading screen. This element was designed to capture the dynamism of the sport of wrestling and the energy of BTSNE's community.</p>

                <h3 className="font-bold pt-4">User-Centric Design System:</h3>
                <p>Drawing on BTSNE's brand guidelines, I developed a design system that was visually appealing and functional. This system supported a consistent and accessible user experience across the app, incorporating elements like color schemes, typography, and UI components that resonate with BTSNE's mission.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Image
                  src="/bts7.png"
                  alt="bento template"
                  width={500}
                  height={500}
                  className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="/bts1.gif"
                  alt="cards template"
                  width={500}
                  height={500}
                  className="rounded-lg object-contain h-auto w-full bg-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            </div>
            
          }
        />
      ),
    },
    {
      title: "Other Projects",
      content: (
        <CollapsibleContent
          preview={
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-4">
                Working independently, I built websites and designed apps for local businesses, and taught myself user experience design and full-stack web development. Here are some highlights:
              </p>
            
              <div className="grid grid-cols-1 gap-4">
                <h3 className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-bold">Together Roasters Mobile App</h3>
                <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-4">I designed a mobile app for a local coffee shop using Figma. The app allows users to browse offerings, place orders, and save favorites for future orders. Here are the screens from the prototype:</p>
                <Image
                  src="/tr1.png"
                  alt="hero template"
                  width={2000}
                  height={2000}
                  className="rounded-lg object-contain h-auto w-full"
                />
               
              </div>
            </div>
          }
          fullContent={
            <div className="pt-8 space-y-8">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <h3 className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-bold">
                    3D Mockup Generator for Mobile Product Screenshots
                  </h3>
                  <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-4">
                    I built a tool to generate 3D mockups of mobile apps for use in design portfolios or marketing presentations. The tool was built using React, Three.js, and Firebase for file uploads. It allows users to upload an image of their mobile app, and then generate and download a PNG of the 3D device with a variety of customization options. Here is a gif of the tool in action:
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <Image
                    src="/mockup.gif"
                    alt="3D mockup generator for mobile product screenshots"
                    width={1000}
                    height={1000}
                    className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <h3 className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-bold">
                  Experimental Website Concepts
                </h3>
                <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-4">
                  Interactive virtual art gallery
                </p>
                <div className="flex flex-col gap-4">
                  <Image
                    src="/gallery.gif"
                    alt="Experimental virtual art gallery concept"
                    width={1000}
                    height={1000}
                    className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-4">
                  Interactive material product landing page
                </p>
                <div className="flex flex-col gap-4">
                  <Image
                    src="/material.gif"
                    alt="Interactive material product landing page concept"
                    width={1000}
                    height={1000}
                    className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="col-span-2">
                  <h3 className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-bold">
                    Conflict Resolution Story Builder
                  </h3>
                  <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-4">
                    I was approached by an M.B.A. graduate from Brandeis who had an idea for a game that would help students understand the complexities of conflict resolution. After working with them to refine the idea, I designed and developed an MVP that allows users to play through a collection of decision-based story games, where the user's choices result in certain outcomes with different conflict resolution scores, which are displayed in the score tracker. The game helps students think through difficult conversations and situations, in order to help them develop the skills to resolve interpersonal conflicts effectively. The game also allows users to create their own stories using an intuitive drag-and-drop decision tree building interface. The MVP was built using React, Next JS, Tailwind CSS, and React Flow for the frontend, and Prisma/PostgreSQL for the backend. The app received positive feedback from beta users, who enjoyed the intuitive, animated interface, and the ability to create their own stories.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Image
                    src="/conflict1.gif"
                    alt="Conflict resolution story builder animation 1"
                    width={1000}
                    height={1000}
                    className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                    src="/conflict2.gif"
                    alt="Conflict resolution story builder animation 2"
                    width={1000}
                    height={1000}
                    className="rounded-lg object-contain h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </div>
              </div>
            </div>
          }
        />
      ),
    },
    {
      title: "Earlier",
      content: (
        
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-4">
                Before college, I worked in I.T. in a global V.C. Incubator (Triton Systems), built and sold custom PCs, and tried to learn just about every software I could get my hands on.
                 </p>
                            <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-4">
                I also practice nature photography and sketching in my free time.
              </p>
              
            </div>
         
      ),
    },
  ];
  
  return (
    <div className="w-full">
      <Timeline data={data} />
      <CTASection />
      
    </div>
  );
}