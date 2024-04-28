<?php

use App\Http\Controllers\Api\Admin\UserController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\Client\ListFacturas;
use App\Http\Controllers\Api\Client\ObjetivovtaselloutController;
use App\Http\Controllers\Api\Client\ResFacturado;
use App\Http\Controllers\Api\Client\ResumenfactController;
use App\Models\Resumenfact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('v1')->group(function () {
    //rutas publicas
    Route::get('/public/list_fact/{canal}', [ListFacturas::class, 'canal']);

    //rutas para autenticarse (dentro de auth)
    Route::post('/auth/register', [AuthController::class, 'register']);
    Route::post('/auth/login', [AuthController::class, 'login']);
    //rol client

    //Rutas privadas
    Route::group(['middleware' => 'auth:sanctum'], function () {
        //auth
        Route::post('/auth/logout', [AuthController::class, 'logout']);
        Route::get('/client/resfac/{canal}', [ResumenfactController::class, 'index']);
        Route::get('/client/objetivo/{canal}', [ObjetivovtaselloutController::class, 'index']);

        //rol Admin
        Route::apiResource('/admin/user', UserController::class);
    });
});




Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
