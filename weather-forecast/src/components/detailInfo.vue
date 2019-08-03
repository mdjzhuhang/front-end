<template>
	<div>
		<ul class="detailList" v-if="details.dt">
			<li>
				{{ details.dt | filterDate }}
			</li>
			<li>
				<span class="name">Day temperature</span>
				<span class="value">{{ details.temp.day | toCelsius }} °C</span>
			</li>
			<li>
				<span class="name">Min daily temperature</span>
				<span class="value">{{ details.temp.min | toCelsius }} °C</span>
			</li>
			<li>
				<span class="name">Max daily temperature</span>
				<span class="value">{{ details.temp.max | toCelsius }} °C</span>
			</li>
			<li>
				<span class="name">Night temperature</span>
				<span class="value">{{ details.temp.night | toCelsius }} °C</span>
			</li>
			<li>
				<span class="name">Evening temperature</span>
				<span class="value">{{ details.temp.eve | toCelsius }} °C</span>
			</li>
			<li>
				<span class="name">Morning temperature</span>
				<span class="value">{{ details.temp.morn | toCelsius }} °C</span>
			</li>
			<li>
				<span class="name">Atmospheric pressure</span>
				<span class="value">{{ details.pressure }} hPa</span>
			</li>
			<li>
				<span class="name">Humidity</span>
				<span class="value">{{ details.humidity }} %</span>
			</li>
			<li>
				<span class="name">Wind speed</span>
				<span class="value">{{ details.speed }} m/s</span>
			</li>
			<li>
				<span class="name">Wind direction</span>
				<span class="value">{{ details.pressure }} °</span>
			</li>
			<li>
				<span class="name">Cloudiness</span>
				<span class="value">{{ details.pressure }} %</span>
			</li>
			<li v-show="details.rain">
				<span class="name">Precipitation volume</span>
				<span class="value">{{ details.rain }} mm</span>
			</li>
			<li v-show="details.snow">
				<span class="name">Snow volume</span>
				<span class="value">{{ details.snow }} mm</span>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	name: 'detailInfo',
	props: {
		details: {}
	},
	filters: {
		toCelsius: temp => {
			temp = temp || 273.16;
			return Math.round(temp - 273.16);
		},
		filterDate: time => {
			let date = new Date(time * 1000);
			return date.getMonth() + 1 + '-' + date.getDate() + '-' + date.getFullYear()
		}
	}
}
</script>
<style scoped>
.detailList {
	max-width: 600px;
	margin: 0 auto;
}
.detailList li {
	padding: 0 10px;
	line-height: 30px;
}

.name {
	display: inline-block;
	width: 65%;
	text-align: left;
}

.value {
	display: inline-block;
	width: 35%;
	text-align: right;
}
</style>