'use client'
export default function BootStrapColourDemo({ pathName, uid, component }: { pathName: string, uid: string, component:any }) {

	let color='#f00'//+component.Fields.hex
	let styleBlock=<></>;
	styleBlock=
	<style global jsx>{`
        body {
          background: #fff;
        }
      `}</style>;

	return (
	<>
	{styleBlock}
	</>
	);
}
