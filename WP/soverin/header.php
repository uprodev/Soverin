<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo('charset');?>">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title><?php echo wp_get_document_title(); ?></title>
		<?php wp_head();?>
</head>

<body <?php body_class() ?>>
<header>
    <div class="top-line">
        <div class="content-width">
            <div class="logo-wrap">
                <a href="#">
                    <img src="<?= get_template_directory_uri();?>/img/logo.svg" alt="">
                </a>
            </div>
            <nav class="top-menu-wrap">
                <ul class="top-menu">
                    <li><a href="#">Solutions<i class="fa-solid fa-chevron-down"></i></a></li>
                    <li><a href="#">About<i class="fa-solid fa-chevron-down"></i></a></li>
                    <li><a href="#">Resources<i class="fa-solid fa-chevron-down"></i></a></li>
                    <li><a href="#">Product<i class="fa-solid fa-chevron-down"></i></a></li>
                </ul>
                <ul class="btn-list">
                    <li><a href="#" class="link">Sign in</a></li>
                    <li><a href="#" class="btn-border"><span>Try now</span></a></li>
                </ul>
                <div class="open-menu">
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
            </nav>
        </div>
    </div>
</header>

<main>