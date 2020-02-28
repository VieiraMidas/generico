<?php

/** @var \Laravel\Lumen\Routing\Router $router */
$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'api'], function () use ($router) {
    $router->group(['prefix' => 'questoes'], function () use ($router) {
        $router->post('', 'QuestoesController@store');
        $router->get('', 'QuestoesController@index');
        $router->get('{id}', 'QuestoesController@show');
        $router->put('{id}', 'QuestoesController@update');
        $router->delete('{id}', 'QuestoesController@destroy');

        $router->get('{questaoId}/alternativas', 'AlternativasController@buscaPorQuestao');
    });

    $router->group(['prefix' => 'alternativas'], function () use ($router) {
        $router->post('', 'AlternativasController@store');
        $router->get('', 'AlternativasController@index');
        $router->get('{id}', 'AlternativasController@show');
        $router->put('{id}', 'AlternativasController@update');
        $router->delete('{id}', 'AlternativasController@destroy');
    });
});
