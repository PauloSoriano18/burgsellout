<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Http\Request;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Validator;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class AuthController extends Controller
{
    //Metodo Register  
    use HasApiTokens, HasFactory, Notifiable, HasRoles;
    public function register(Request $request)
    {
        $response = ["success" => false];
        //validacion
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'nickname' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);
        if ($validator->fails()) {
            $response = ["error" => $validator->errors()];
            return response()->json($response, 200);
        }

        $input = $request->all();
        $input["password"] = bcrypt($input["password"]);

        $user = User::create($input);
        $user->assignRole('client');

        $response["success"] = true;
        // $response["token"] = $user->createToken("Polys")->plainTextToken;

        return response()->json($response, 200);
    }

    public function login(Request $request)
    {
        $response = ["success" => false];
        //validacion
        $validator = Validator::make($request->all(), [
            //'email' => 'required|email',
            'nickname' => 'required',
            'password' => 'required',
        ]);
        if ($validator->fails()) {
            $response = ["error" => $validator->errors()];
            return response()->json($response, 200);
        }
        //->attempt(['email' => $request->email, 'password' =>
        if (auth()->attempt(['nickname' => $request->nickname, 'password' => $request->password])) {
            $user = auth()->user();
            $user->hasRole('admin');
            $response['token'] = $user->createToken("Polys")->plainTextToken;
            $response['canal'] = $user->canal;
            $response['user'] = $user;
            $response['message'] = "Logueado";
            $response['success'] = true;
        }
        return response()->json($response, 200);
    }

    public function logout()
    {
        $response = ["success" => false];

        auth()->user()->tokens()->delete();

        $response = [
            "success" => true,
            "message" => "Sesión cerrada"
        ];
        return response()->json($response, 200);
    }
}
