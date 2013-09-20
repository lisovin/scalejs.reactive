param($installPath, $toolsPath, $package, $project)

$project |
	Add-Paths "{
		'scalejs.reactive'	: 'Scripts/scalejs.reactive-$($package.Version)',
		'rx'				: 'Scripts/rx',
		'rx.binding'		: 'Scripts/rx.binding',
		'rx.coincidence'	: 'Scripts/rx.coincidence',
		'rx.experimental'	: 'Scripts/rx.experimental',
		'rx.joinpatterns'	: 'Scripts/rx.joinpatterns',
		'rx.time'			: 'Scripts/rx.time'
	}" |
	Add-ScalejsExtension 'scalejs.reactive' |
	Out-Null