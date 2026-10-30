<!-- Shared SVG filter used by every SprayMark: a slight wobble so strokes read as aerosol, not vector. -->
<svg aria-hidden="true" focusable="false" width="0" height="0" style="position:absolute">
	<defs>
		<filter id="spray" x="-10%" y="-50%" width="120%" height="200%">
			<feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" result="t" />
			<feDisplacementMap in="SourceGraphic" in2="t" scale="3" />
		</filter>
	</defs>
</svg>
