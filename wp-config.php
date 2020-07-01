<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'gng_desain' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '=%XZ{~^juShx(z&)k(eV~u1?th4wO1s4< UyZ(dK<_Xv&>T^)0I[nR1}IZvACjZB' );
define( 'SECURE_AUTH_KEY',  'N%FO)$j>6%ylc?~.wz8r:DRiHkFbgMtkG`KGXyV+it5T}]#mQhn@ireSiy959]vc' );
define( 'LOGGED_IN_KEY',    '<Ewn8*E$Hs,@}Sw=yVX:)|nn9BHDPCMu3%0aDTs=7/GT01}lH[7J(2BtJDtqX<%[' );
define( 'NONCE_KEY',        '/41DB|6*(2?KV}`Q+Yg0v$Hq&63}_G}b6[b=7A*(rM(ly!58YQ*L^x2z-or2ZlxT' );
define( 'AUTH_SALT',        'ARj/(~A0vG=u_n?2|5vPfFj8#6-xM~^6bL*zY=#qyqbxQr4XR|xA/ZN=-?EdkI1o' );
define( 'SECURE_AUTH_SALT', '40 zCN1ZY)#zU/~B`G_ ChQ<f-Yz]{W{4<+h3Z!QPG@PYytvc&HP%*{@#opryaU+' );
define( 'LOGGED_IN_SALT',   '+~<eA?.r}%L2 V9IwX+1V=c6D(NwDT{I,6rNJt<kl;~.%3M /M;D.;fn&i]Bqtze' );
define( 'NONCE_SALT',       'XQun$vA%uoToWc#yqV-`#<sH:.mwjUNL%tHrCljfX5E #b5}6m?;#d VIM/em5rC' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
